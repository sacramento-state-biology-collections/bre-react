import { createBoard } from '@wixc3/react-board';
import { IntroView } from '../../../components/intro-view/intro-view';
import { Intro } from '../../../components/intro/intro';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'IntroView',
    Board: () => (
        <IntroView>
            <Header />
            <Intro  toggleAnimalBool={()=>{}} toggleBirdBool={()=>{}} togglefishBool={()=>{}} toggleInvertBool={()=>{}} toggleMammalBool={()=>{}} togglePlantBool={()=>{}} toggleReptileBool={()=>{}}/>
        </IntroView>
    ),
    environmentProps: {
        canvasHeight: 690,
        windowWidth: 1024,
    },
});
