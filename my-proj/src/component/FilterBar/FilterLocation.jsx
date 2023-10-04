import '../../styles/SideBarFilter.css'

export const FilterLocation = () => {
    return (
        <div className="shop-search-filter-location">
            <div className="shop-filter-group">
                <div className="shop-filter-group__header">Nơi Bán</div>
                <div className="shop-filter-group__body">
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                        <input type="checkbox" defaultValue="Hà Nội" />
                        <span className="shop-checkbox__label">Hà Nội</span>
                    </div>
                </div>
                {/**/}
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                        <input type="checkbox" defaultValue="TP Hồ Chí Minh" />
                        <span className="shop-checkbox__label">TP Hồ Chí Minh</span>
                    </div>
                </div>
                {/**/}
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                        <input type="checkbox" defaultValue="Đà Nẵng" />
                        <span className="shop-checkbox__label">Đà Nẵng</span>
                    </div>
                </div>
                {/**/}
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                        <input type="checkbox" defaultValue="Thái Nguyên" />
                        <span className="shop-checkbox__label">Thái Nguyên</span>
                    </div>
                </div>
                {/**/}
                </div>
            </div>
            <hr />
        </div>
    );
}