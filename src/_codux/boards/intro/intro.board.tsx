import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../components/intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro className="mid" toggleAnimalBool={()=>{}} toggleBirdBool={()=>{}} togglefishBool={()=>{}} toggleInvertBool={()=>{}} toggleMammalBool={()=>{}} togglePlantBool={()=>{}} toggleReptileBool={()=>{}} animalBool birdBool fishBool invertBool mammalBool plantBool reptileBool />
});
