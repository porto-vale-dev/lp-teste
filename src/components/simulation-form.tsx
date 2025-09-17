'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from 'next/navigation';

// Schema for Step 2
const personalInfoSchema = z.object({
  fullName: z.string().min(3, { message: 'Nome completo é obrigatório.' }),
  email: z.string().email({ message: 'E-mail inválido.' }).optional().or(z.literal('')),
  phoneNumber: z.string().min(10, { message: 'Número de WhatsApp é obrigatório.' }),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;

// Constants for credit calculation
const CREDITOS = [200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000];
const PARCELAS = [966, 1449, 1932, 2415, 2862, 3339, 3816, 4293, 4830];
const CREDITO_MIN = 200000;
const CREDITO_MAX = 1000000;

// Helper functions
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatNumber = (value: number) => {
  return value.toLocaleString('pt-BR');
};

const interpolateParcela = (credito: number) => {
  for (let i = 0; i < CREDITOS.length - 1; i++) {
    if (credito >= CREDITOS[i] && credito <= CREDITOS[i + 1]) {
      const percent = (credito - CREDITOS[i]) / (CREDITOS[i + 1] - CREDITOS[i]);
      return Math.round(PARCELAS[i] + (PARCELAS[i + 1] - PARCELAS[i]) * percent);
    }
  }
  return PARCELAS[PARCELAS.length - 1];
};

const getDeviceType = () => {
    if (typeof window === 'undefined') return 'desktop';
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return "mobile";
    return "desktop";
};

export default function SimulationForm() {
  const [step, setStep] = useState(1);
  const [creditValue, setCreditValue] = useState(300000);
  const [installmentValue, setInstallmentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<PersonalInfoForm>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  useEffect(() => {
    const newInstallment = interpolateParcela(creditValue);
    setInstallmentValue(newInstallment);
  }, [creditValue]);

  const handleSliderChange = (value: number[]) => {
    const percent = value[0] / 100;
    const credit = Math.round((CREDITO_MIN + (CREDITO_MAX - CREDITO_MIN) * percent) / 10000) * 10000;
    setCreditValue(credit);
  };
  
  const sliderPosition = ((creditValue - CREDITO_MIN) / (CREDITO_MAX - CREDITO_MIN)) * 100;

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  const onSubmit = async (data: PersonalInfoForm) => {
    setIsLoading(true);
    
    const utmData = {
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_term: searchParams.get('utm_term') || '',
        utm_content: searchParams.get('utm_content') || '',
    };

    const submissionData = {
        Nome: data.fullName,
        Email: data.email,
        Celular: data.phoneNumber,
        TipoDeConsorcio: "Imóvel",
        Credito: creditValue,
        Parcela: installmentValue,
        utm_device: getDeviceType(),
        page_path: window.location.pathname,
        ...utmData,
    };

    try {
        const response = await fetch('/api/simulate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submissionData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
            toast({
                title: "Sucesso!",
                description: "Sua simulação foi enviada. Redirecionando...",
            });
            // In a real scenario, you might redirect to a thank you page
            // router.push('/obrigado');
            setTimeout(() => {
                form.reset();
                setStep(1);
                setCreditValue(300000);
            }, 3000);

        } else {
            throw new Error(result.message || 'Falha ao enviar a simulação.');
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';
        toast({
            variant: "destructive",
            title: "Erro",
            description: errorMessage,
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Card id="simulation-form" className="w-full max-w-md shadow-lg rounded-2xl">
      <CardContent className="p-6 text-center">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Chegou a hora de você comprar o seu{' '}
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">IMÓVEL</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Escolha o valor desejado:</p>

            <div className="grid grid-cols-2 gap-4 my-6 text-foreground">
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground">Crédito:</span>
                <span className="text-2xl font-bold">{formatCurrency(creditValue)}</span>
              </div>
              <div className="flex flex-col items-center border-l">
                <span className="text-sm text-muted-foreground">Parcela:</span>
                <span className="text-2xl font-bold">{formatCurrency(installmentValue)}</span>
              </div>
            </div>

            <Slider
              value={[sliderPosition]}
              onValueChange={handleSliderChange}
              max={100}
              step={1}
              className="my-6"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatCurrency(CREDITO_MIN)}</span>
              <span>{formatCurrency(CREDITO_MAX)}</span>
            </div>

            <Button onClick={handleNextStep} size="lg" className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              Simular agora
            </Button>
          </div>
        )}

        {step === 2 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Compre seu Imóvel com a Porto Vale!</h2>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>Nome Completo*</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>WhatsApp (com DDD)*</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(00) 90000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-sm text-muted-foreground text-center">
                Canal exclusivo para <span className="underline">consórcio de imóvel</span>.
              </p>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={handlePrevStep} className="w-full" disabled={isLoading}>
                  Voltar
                </Button>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Tenho Interesse!'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
