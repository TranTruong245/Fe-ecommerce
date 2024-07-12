import React from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
function NewProductFeature(props) {
    return (
        <section className="new_product_area">
            <div className="container">
                <HeaderContent mainContent={props.title} infoContent={props.description}>
                    {' '}
                </HeaderContent>
                <div className="row">
                    <div className="">
                        <div className="row">
                            {props.data &&
                                props.data.length > 0 &&
                                props.data.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                            <ItemProduct
                                                id={item.id}
                                                width={255}
                                                height={255}
                                                type=""
                                                name={item.name}
                                                img={item.productDetail[0].productImage[0].image}
                                                price={item.productDetail[0].originalPrice}
                                                discountPrice={item.productDetail[0].discountPrice}
                                            ></ItemProduct>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewProductFeature;
