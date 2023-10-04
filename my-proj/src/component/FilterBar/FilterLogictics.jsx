import '../../styles/SideBarFilter.css'

export const FilterLogictics =() =>{
    return (
        <div className="shop-search-filter-logictics">
            <div className="shop-filter-group">
                <div className="shop-filter-group__header">Hình thức giao</div>
                <div className="shop-filter-group__body">
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                    <input type="checkbox" defaultValue="Hà Nội" />
                    <span className="shop-checkbox__label">Nhanh</span>
                    </div>
                </div>
                {/**/}
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                    <input type="checkbox" defaultValue="TP Hồ Chí Minh" />
                    <span className="shop-checkbox__label">Hỏa Tốc</span>
                    </div>
                </div>
                {/**/}
                <div className="shop-filter-group__body--items">
                    <div className="shop-checkbox__control">
                    <input type="checkbox" defaultValue="Đà Nẵng" />
                    <span className="shop-checkbox__label">Tiết kiệm</span>
                    </div>
                </div>
                {/**/}
                </div>
            </div>
            <hr />
        </div>
    );
}