import {  SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { error, games, isloading } = useGames()
  const skeletons = [1,2,3,4,5,6,7,8]

  return (
    <>
      {error && <Text color={'red'}>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding="10px"
      spacing={6}>
        {isloading&&skeletons.map(skeleton=><GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
