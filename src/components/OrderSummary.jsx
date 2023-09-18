    import React, { useState, useEffect } from "react";

    export default function OrderSummary({ item }) {
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const totalPrice = calculateTotal();
        setTotalPrice(totalPrice);

    });
    const calculateTotal = () => {
        let total = 0;
        item.forEach((product) => {
            total += product.price * product.amount;
        });
        return total;
    };

    return (
        <>
        <div className="sticky">
            <div className="card mb-3 ">
                <div className="card-body">
                    <h3 className="card-title mb-4">Sipariş Özeti</h3>
                    <div className="productTotal mb-3">
                        <h6 className="card-subtitle text-body-secondary">
                            Ürünlerin Toplamı
                        </h6>
                        <span>{totalPrice.toFixed(2)} TL</span>
                    </div>
                    <div className="productTotal">
                        <h6 className="card-subtitle text-body-secondary">
                            Ödenecek Toplam
                        </h6>
                        <span>{`${totalPrice > 0 ? `${(totalPrice - totalDiscount).toFixed(2)}` : `${totalPrice}`}`} TL</span>
                    </div>
                </div>
            </div>
                
        </div>
        </>
    );
}