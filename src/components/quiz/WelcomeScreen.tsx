import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  userName: string;
  setUserName: (name: string) => void;
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  userName,
  setUserName,
  onStart
}) => {
  return (
    <div className="max-w-md mx-auto mt-20 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">AWS Cloud Practitioner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Seu Nome</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Digite seu nome"
              />
            </div>
            <Button
              className="w-full"
              onClick={onStart}
            >
              Iniciar Simulado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};