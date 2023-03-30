import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'HistoryResult',
    Board: () => (
        <div>
            <div className="upload-date">
                Date
                <div className="file-uploads">
                    <span className="File">
                        <div>
                            <img
                                src={'../styles/Microsoft_Office_Excel_(2019–present).svg.png'}
                                className="size-image"
                            />
                        </div>
                        <div>
                            <a href="/" className="padding">
                                Link
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1022,
    },
});
