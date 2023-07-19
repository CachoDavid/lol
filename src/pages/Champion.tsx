import { useState } from 'react'

import { Champion } from '@/models/Champion'
import { useLoaderData } from 'react-router-dom'

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const tagImages: { [tag: string]: string } = {
  Fighter:
    'https:static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png',
  Tank: 'https:static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png',
  Mage: 'https:static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png',
  Assassin:
    'https:static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png',
  Marksman:
    'https:static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png',
  Support:
    'https:static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png'
}

export default function ChampionPage() {
  const champion = useLoaderData() as Champion // o useLoaderData é uma função (Custom Hook) que retorna a informação obtida no loader da chamada da API

  const [currentAbility, setCurrentAbility] = useState<number>(0)

  // const spells: Spell[] = champion.spells.map((spell) => ({
  //   name: spell.name,
  //   description: spell.description,
  //   image: spell.image.sprite
  // }))
  const spells = [
    {
      name: champion.passive.name,
      description: champion.passive.description,
      image: `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/${champion.passive.image.full}`
    },
    ...champion.spells.map((spell) => ({
      name: spell.name,
      description: spell.description,
      image: `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spell.image.full}`
    }))
  ]

  const currentSpellContent = spells[currentAbility]

  const formattedTitle = champion.title
    ? capitalizeFirstLetter(champion.title)
    : ''

  function removeTags(str: string): string {
    return str.replace(/<[^>]+>/g, '')
  }

  const bgImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
  return (
    <div className='grid grid-cols-[3fr_0] md:grid-cols-[1fr_3fr]  gap-0'>
      <div className='p-10 text-white'>
        <a
          href={`/`}
          className='text-2xl'>
          «
        </a>
        <div>
          <div className='flex items-center justify-center  '>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champion.id}.png`}
              alt={champion.name}
              className='rounded-full mt-4 w-40 border-[#1E2323] outline outline-8 -outline-offset-4 outline-[#101313]'
            />
          </div>
          <div className='text-center text-6xl font-bold font-mono text-[#f59e0b]'>
            {capitalizeFirstLetter(champion.name)}
          </div>
          <div className='text-center text-2xl pb-4'>{formattedTitle}</div>
          <div className='flex  items-center justify-center gap-2 w-full py-8'>
            {champion.tags.map((tag) => (
              <div
                key={tag}
                className='flex flex-col text-center '>
                <img
                  key={tag}
                  src={tagImages[tag]}
                  alt={tag}
                  className='w-24 bg-transparent'
                />
                <span className='font-mono font-bold uppercase'>{tag}</span>
              </div>
            ))}
          </div>
          <p className='py-8 text-md text-justify'>{champion.lore}</p>

          <div className='flex gap-4 p-4 '>
            {spells.map((spell, index) => {
              return (
                <img
                  src={spell.image}
                  onClick={() => setCurrentAbility(index)}
                  key={index}
                  className={`rounded-lg border cursor-pointer transition shadow-lg ${
                    index === currentAbility ? '' : 'grayscale'
                  }`}
                />
              )
            })}
          </div>
          <div className='p-4'>
            <span className='font-bold font-mono text-lg shadow-lg text-[#f59e0b]'>
              {currentSpellContent.name}
            </span>
            <p className='pt-4 text-md'>
              {removeTags(currentSpellContent.description)}
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-full h-screen bg-center bg-cover opacity-20'
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </div>
  )
}
