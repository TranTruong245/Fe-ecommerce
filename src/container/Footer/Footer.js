import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Sản phẩm hàng đầu</h4>
                            <ul>
                                <li>
                                    <a href="#">Áo khoác</a>
                                </li>
                                <li>
                                    <a href="#">Quần jeans</a>
                                </li>
                                <li>
                                    <a href="#">Giày thể thao</a>
                                </li>
                                <li>
                                    <a href="#">Phụ kiện</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Liên kết nhanh</h4>
                            <ul>
                                <li>
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="#">Sản phẩm</a>
                                </li>
                                <li>
                                    <a href="#">Khuyến mãi</a>
                                </li>
                                <li>
                                    <a href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Thông tin</h4>
                            <ul>
                                <li>
                                    <a href="#">Về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="#">Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a href="#">Điều khoản dịch vụ</a>
                                </li>
                                <li>
                                    <a href="#">Liên hệ hỗ trợ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Tính năng</h4>
                            <ul>
                                <li>
                                    <a href="#">Tài khoản</a>
                                </li>
                                <li>
                                    <a href="#">Lịch sử mua hàng</a>
                                </li>
                                <li>
                                    <a href="#">Yêu thích</a>
                                </li>
                                <li>
                                    <a href="#">Theo dõi đơn hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Tài nguyên</h4>
                            <ul>
                                <li>
                                    <a href="#">Hướng dẫn</a>
                                </li>
                                <li>
                                    <a href="#">Nghiên cứu</a>
                                </li>
                                <li>
                                    <a href="#">Chuyên gia</a>
                                </li>
                                <li>
                                    <a href="#">Đại lý</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Theo dõi chúng tôi</h4>
                            <ul className="social-icons">
                                <li>
                                    <a href="#" className="text-secondary mr-3">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-secondary mr-3">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-secondary mr-3">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-secondary">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom row align-items-center justify-content-center">
                        <p className="footer-text m-0 col-lg-8 col-md-12">
                            Bản quyền ©2024 Đồ án tốt nghiệp của Trần Trường & Hùng Đinh{' '}
                            <i className="fa fa-heart-o" aria-hidden="true" />
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
