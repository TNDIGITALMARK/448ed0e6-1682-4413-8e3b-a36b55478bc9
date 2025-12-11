'use client';

import { Navigation } from '@/components/navigation';
import {
  territories,
  activeHeists,
  rivalGangs,
  currentBusinessStats,
  getTotalIncome
} from '@/lib/data/business';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Target,
  Skull,
  TrendingUp,
  Users,
  Shield,
  AlertTriangle,
  DollarSign,
  Clock
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BusinessPage() {
  const [mounted, setMounted] = useState(false);
  const [incomeCounter, setIncomeCounter] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Animated income counter
    const target = getTotalIncome();
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setIncomeCounter(target);
        clearInterval(timer);
      } else {
        setIncomeCounter(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low': return 'text-green-400 border-green-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'high': return 'text-orange-400 border-orange-400';
      case 'extreme': return 'text-red-400 border-red-400';
      default: return 'text-gold border-gold';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'controlled': return 'bg-green-500/20 text-green-400 border-green-400';
      case 'contested': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400';
      case 'target': return 'bg-red-500/20 text-red-400 border-red-400';
      default: return 'bg-gold/20 text-gold border-gold';
    }
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-color-shadow via-color-mahogany-dark to-color-shadow" />
          <div className="absolute inset-0 texture-wood opacity-20" />

          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-3 bg-color-mahogany/80 border-2 border-gold px-6 py-3 rounded shadow-vintage-md">
                <span className="text-2xl">💼</span>
                <span className="font-decorative text-gold text-lg tracking-wider">
                  OPERATIONS
                </span>
              </div>

              <h1 className="font-heading text-6xl lg:text-7xl text-gold">
                THE FAMILY BUSINESS
              </h1>

              <p className="text-xl text-cream-dark leading-relaxed max-w-2xl mx-auto">
                A comprehensive overview of our enterprises, ongoing operations, and strategic positions
                across all the kingdoms.
              </p>

              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            </div>
          </div>
        </section>

        {/* Business Stats Dashboard */}
        <section className="relative py-12">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <Card className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <DollarSign className="w-10 h-10 text-gold mx-auto" />
                  <div className="font-heading text-3xl text-gold">
                    ${mounted ? incomeCounter.toLocaleString() : '0'}
                  </div>
                  <p className="text-sm text-cream uppercase tracking-wider">
                    Weekly Income
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <Target className="w-10 h-10 text-gold mx-auto" />
                  <div className="font-heading text-3xl text-gold">
                    {currentBusinessStats.active_operations}
                  </div>
                  <p className="text-sm text-cream uppercase tracking-wider">
                    Active Operations
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <MapPin className="w-10 h-10 text-gold mx-auto" />
                  <div className="font-heading text-3xl text-gold">
                    {currentBusinessStats.territory_controlled}
                  </div>
                  <p className="text-sm text-cream uppercase tracking-wider">
                    Territories Held
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <Users className="w-10 h-10 text-gold mx-auto" />
                  <div className="font-heading text-3xl text-gold">
                    {currentBusinessStats.crew_size}
                  </div>
                  <p className="text-sm text-cream uppercase tracking-wider">
                    Crew Members
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <AlertTriangle className="w-10 h-10 text-gold mx-auto" />
                  <div className="font-heading text-3xl text-gold">
                    {currentBusinessStats.heat_level}%
                  </div>
                  <p className="text-sm text-cream uppercase tracking-wider">
                    Heat Level
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Territory Control Map */}
        <section className="relative py-12">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-4xl text-gold flex items-center justify-center gap-3">
                  <MapPin className="w-8 h-8" />
                  TERRITORY CONTROL
                </h2>
                <p className="text-cream-dark max-w-2xl mx-auto">
                  Our strategic positions across the kingdoms. Each territory generates income
                  and provides tactical advantages in the ongoing power struggle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {territories.map((territory) => (
                  <Card
                    key={territory.id}
                    className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all hover:-translate-y-1"
                  >
                    <CardHeader className="border-b border-swamp-green-dark">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <CardTitle className="font-heading text-xl text-gold">
                            {territory.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className={getStatusColor(territory.status)}>
                          {territory.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <p className="text-sm text-cream-dark leading-relaxed">
                        {territory.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-swamp-green-dark">
                        <span className="text-sm text-cream uppercase tracking-wider">
                          Monthly Income
                        </span>
                        <span className="font-heading text-xl text-gold">
                          ${territory.income.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Active Heists */}
        <section className="relative py-12">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-4xl text-gold flex items-center justify-center gap-3">
                  <Target className="w-8 h-8" />
                  CURRENT OPERATIONS
                </h2>
                <p className="text-cream-dark max-w-2xl mx-auto">
                  High-stakes jobs currently in progress. These operations require precision,
                  timing, and the best crew money can buy.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeHeists.map((heist) => (
                  <Card
                    key={heist.id}
                    className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all"
                  >
                    <CardHeader className="border-b border-swamp-green-dark">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="font-heading text-2xl text-gold flex-1">
                            {heist.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className={getDifficultyColor(heist.difficulty)}
                          >
                            {heist.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-cream-dark">
                          <Clock className="w-4 h-4" />
                          <span className="uppercase tracking-wider">
                            Status: {heist.status}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-cream-dark">Target:</span>
                          <span className="text-cream font-medium">{heist.target}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-cream-dark">Potential Take:</span>
                          <span className="text-gold font-heading text-lg">
                            ${heist.potential_take.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-cream-dark leading-relaxed pt-2 border-t border-swamp-green-dark">
                        {heist.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-sm text-cream-dark uppercase tracking-wider">
                          Crew Assigned:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {heist.crew_assigned.map((member) => (
                            <Badge
                              key={member}
                              variant="outline"
                              className="bg-color-swamp-green-dark/50 text-cream border-swamp-green"
                            >
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rival Gangs */}
        <section className="relative py-12 pb-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-4xl text-gold flex items-center justify-center gap-3">
                  <Skull className="w-8 h-8" />
                  KNOWN RIVALS
                </h2>
                <p className="text-cream-dark max-w-2xl mx-auto">
                  Competition in the underworld. These organizations operate in our territories
                  and pose varying levels of threat to family interests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rivalGangs.map((gang) => (
                  <Card
                    key={gang.id}
                    className="bg-color-mahogany-dark border-2 border-swamp-green-dark shadow-vintage-md hover:shadow-vintage-lg transition-all"
                  >
                    <CardHeader className="border-b border-swamp-green-dark">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <CardTitle className="font-heading text-2xl text-gold">
                            {gang.name}
                          </CardTitle>
                          <p className="text-sm text-cream-dark mt-2">
                            Led by <span className="text-gold">{gang.boss}</span>
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-red-400" />
                            <span className="text-xs text-cream-dark uppercase tracking-wider">
                              Threat Level
                            </span>
                          </div>
                          <div className="font-heading text-2xl text-gold">
                            {gang.threat_level}%
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gold" />
                            <span className="text-xs text-cream-dark uppercase tracking-wider">
                              Territories
                            </span>
                          </div>
                          <div className="font-heading text-2xl text-gold">
                            {gang.territory_count}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-cream-dark leading-relaxed pt-4 border-t border-swamp-green-dark">
                        {gang.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
