import {Sortbar} from './ContentBlock/Sortbar'
import {ProductCard} from './ContentBlock/ProductCard'

import '../styles/ProductCard.css'

const Cards = [
    {
        "id": 1,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 2,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 3,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 4,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 5,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 6,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 7,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 8,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 9,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 10,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    },
    {
        "id": 11,
        "ProductLink": "https://cellphones.com.vn/iphone-14-pro-max.html",
        "ProductImg": "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
        "ProductTittle": "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        "ProductPrice": 25990000,
        "Rating": 3,
        "ProductSell": 1200,
    }
]

export const ContentBlock = () =>{
    return (
        <div className="flex-container">
            <Sortbar />
            <div className="block-product-list-filter">
                <div className="product-list-filter">
                    {Cards.map(sanpham =>(
                        <ProductCard 
                            key={sanpham.id}
                            Cards = {sanpham}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}