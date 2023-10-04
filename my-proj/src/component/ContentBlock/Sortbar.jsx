import '../../styles/Sortbar.css'

export const Sortbar = () => {
    return (
        <>        
        <div className="block-shop-sort-bar">
            <div className="shop-sort-bar">
                <span className="shop-sort-bar__label">Sắp xếp theo</span>
                <div className="shop-sort-by-options">
                    <div className="shop-sort-by-options__option shop-sort-by-options__option--selected" style={{ backgroundColor: "rgb(111, 245, 111)" }}>
                        Phổ biến
                    </div>
                    <div className="shop-sort-by-options__option">Mới nhất</div>
                    <div className="shop-sort-by-options__option">Bán chạy</div>
                    <div className="select-with-status">
                        <div className="select-with-status__holder">
                            <span className="select-with-status__placeholder">Giá</span>
                            <span className="select-with-status__icon">
                            <svg viewBox="0 0 10 6" className="shopee-svg-icon icon-arrow-down-small">
                                <path d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z" fillRule="nonzero"/>
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        </>
    );
}