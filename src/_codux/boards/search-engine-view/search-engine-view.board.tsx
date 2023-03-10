import { createBoard } from '@wixc3/react-board';
import { SearchEngineView } from '../../../components/search-engine-view/search-engine-view';

export default createBoard({
    name: 'SearchEngineView',
    Board: () => <SearchEngineView toggle_WelcomeView={()=>{}} toggle_TableEngineView={()=>{}} />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
