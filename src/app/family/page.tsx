'use client';

import { Navigation } from '@/components/navigation';
import { getAllCharacters } from '@/lib/data/characters';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import type { Character } from '@/lib/data/characters';

export default function FamilyPage() {
  const characters = getAllCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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
                <span className="text-2xl">👥</span>
                <span className="font-decorative text-gold text-lg tracking-wider">
                  THE ORGANIZATION
                </span>
              </div>

              <h1 className="font-heading text-6xl lg:text-7xl text-gold">
                MEET THE FAMILY
              </h1>

              <p className="text-xl text-cream-dark leading-relaxed max-w-2xl mx-auto">
                These are the made men and women who run the most powerful criminal organization
                in all the kingdoms. Respect them, fear them, but never cross them.
              </p>

              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            </div>
          </div>
        </section>

        {/* Character Grid */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-color-shadow via-color-swamp-green-dark/10 to-color-shadow" />

          <div className="container relative z-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {characters.map((character) => (
                <div
                  key={character.id}
                  onClick={() => setSelectedCharacter(character)}
                  className="group relative bg-color-mahogany-dark border-2 border-swamp-green-dark rounded-lg overflow-hidden shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Character Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-b from-color-swamp-green-dark to-color-mahogany-dark flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 texture-wood opacity-30" />
                    <span className="text-8xl relative z-10">
                      {character.id === 'shrek' && '🐸'}
                      {character.id === 'fiona' && '👸'}
                      {character.id === 'donkey' && '🫏'}
                      {character.id === 'puss' && '🐱'}
                      {character.id === 'dragon' && '🐉'}
                      {character.id === 'pinocchio' && '🤥'}
                      {character.id === 'gingerbread' && '🍪'}
                    </span>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-color-shadow via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-gold font-body uppercase tracking-wider text-sm">
                        View Profile
                      </span>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-heading text-2xl text-gold group-hover:text-gold-light transition-colors">
                        {character.alias}
                      </h3>
                      <p className="font-decorative text-sm text-cream-dark italic">
                        {character.title}
                      </p>
                    </div>

                    <p className="text-sm text-cream line-clamp-2">
                      {character.backstory}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <Badge variant="outline" className="text-xs bg-color-swamp-green/20 text-gold border-gold">
                        {character.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Stats Preview */}
                  <div className="border-t border-swamp-green-dark px-6 py-3 bg-color-mahogany/50">
                    <div className="flex justify-between text-xs text-cream-dark">
                      <span>Intimidation: {character.stats.intimidation}</span>
                      <span>Loyalty: {character.stats.loyalty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-color-mahogany-dark" />
          <div className="absolute inset-0 texture-wood opacity-20" />

          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="text-7xl text-gold-dark/30 font-decorative">"</div>
              <blockquote className="font-heading text-2xl lg:text-3xl text-cream italic leading-relaxed -mt-12">
                In this family, loyalty isn't just expected—it's the price of admission.
              </blockquote>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-px w-16 bg-gold" />
                <cite className="font-body text-gold text-sm not-italic tracking-wider uppercase">
                  Family Code
                </cite>
                <div className="h-px w-16 bg-gold" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Character Detail Modal */}
      <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-color-mahogany-dark border-2 border-gold text-cream">
          {selectedCharacter && (
            <>
              <DialogHeader className="border-b border-swamp-green-dark pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <DialogTitle className="font-heading text-4xl text-gold">
                      {selectedCharacter.alias}
                    </DialogTitle>
                    <p className="font-decorative text-xl text-cream-dark italic">
                      {selectedCharacter.title}
                    </p>
                    <Badge className="bg-color-swamp-green text-cream border-gold">
                      {selectedCharacter.role}
                    </Badge>
                  </div>
                  <span className="text-7xl ml-4">
                    {selectedCharacter.id === 'shrek' && '🐸'}
                    {selectedCharacter.id === 'fiona' && '👸'}
                    {selectedCharacter.id === 'donkey' && '🫏'}
                    {selectedCharacter.id === 'puss' && '🐱'}
                    {selectedCharacter.id === 'dragon' && '🐉'}
                    {selectedCharacter.id === 'pinocchio' && '🤥'}
                    {selectedCharacter.id === 'gingerbread' && '🍪'}
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-8 pt-6">
                {/* Quote */}
                <div className="bg-color-mahogany/50 border-l-4 border-gold p-6 rounded">
                  <p className="font-heading text-lg text-cream italic">
                    "{selectedCharacter.quote}"
                  </p>
                </div>

                {/* Backstory */}
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-gold">Background</h3>
                  <p className="text-cream-dark leading-relaxed">
                    {selectedCharacter.backstory}
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-gold">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-color-swamp-green-dark/50 text-cream border-swamp-green"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <h3 className="font-heading text-2xl text-gold">Attributes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedCharacter.stats).map(([stat, value]) => (
                      <div key={stat} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-cream capitalize">{stat}</span>
                          <span className="text-gold font-bold">{value}</span>
                        </div>
                        <div className="h-2 bg-color-shadow rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-color-swamp-green to-color-gold transition-all duration-500"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
