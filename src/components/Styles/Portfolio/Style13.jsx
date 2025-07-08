import React from "react";

const Style13 = () => {
  return (
    <>
      <style>{`
      body {
  height: 100%;
  border: 0 !important;
}

body {
  font-family: "DM Sans", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.55;
  position: relative;
  visibility: visible;
  overflow-x: hidden;
  color: #696969;
  background-color: #FFFFFF;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Syne", sans-serif;
  font-weight: 700;
  line-height: 1.6;
  margin-top: 0;
  color: #333333;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  line-height: inherit;
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

a,
button {
  line-height: inherit;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition-duration: 300ms;
}

a,
button,
img,
input {
  transition: all 0.5s ease 0s;
}

*:focus {
  outline: none;
}

a:focus {
  text-decoration: none;
  color: inherit;
  outline: none;
}

a:hover {
  text-decoration: none;
  color: #FFB646;
}

button,
input[type=submit] {
  cursor: pointer;
}

img {
  max-width: 100%;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  opacity: 1;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  opacity: 1;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
}

ul:last-child {
  margin-bottom: 0;
}

hr {
  border-top-width: 2px;
}

.btn-primary, .btn-primary-outline {
  margin-right: 8px;
  padding: 12px 24px;
  border: 1px solid rgba(8, 8, 8, 0.4);
  font-weight: 700;
  font-size: 15px;
  background-color: #080808;
  color: #FFFFFF;
  text-transform: capitalize;
  line-height: 1;
  border-radius: 8px;
  transition: all 0.5s;
}
@media only screen and (min-width: 768px) and (max-width: 991px), only screen and (min-width: 992px) and (max-width: 1199px), only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .btn-primary, .btn-primary-outline {
    padding: 16px 28px;
  }
}
.btn-primary:hover, .btn-primary-outline:hover {
  background-color: transparent;
  border-color: rgba(8, 8, 8, 0.4);
  color: rgba(8, 8, 8, 0.95);
}
.btn-primary:hover .animate-arrow-up, .btn-primary-outline:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}

.btn-primary-outline {
  margin-right: 0;
  background-color: transparent;
  color: #080808;
}
.btn-primary-outline:hover {
  background-color: #080808;
  border-color: #080808;
  color: #FFFFFF;
}

.tab-btn {
  border: 0;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  background-color: #FFFFFF;
  color: #080808;
  line-height: 1;
  border-radius: 8px;
  transition: all 0.3s;
}
@media only screen and (min-width: 992px) and (max-width: 1199px), only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .tab-btn {
    padding: 16px 28px;
  }
}
.tab-btn:hover {
  color: #FFFFFF;
  background-color: #080808;
}
.tab-btn:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}

.tab-btn.active {
  color: #FFFFFF;
  background-color: #080808;
}

.paragraph {
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: rgba(8, 8, 8, 0.6);
}

.font-Syne {
  font-family: "Syne", sans-serif;
}

.font-Inter {
  font-family: "Inter", sans-serif;
}

.font-Poppins {
  font-family: "Poppins", sans-serif;
}

.font-DMSans {
  font-family: "DM Sans", sans-serif;
}

.font-sans {
  font-family: "DM Sans", sans-serif;
}

.text-lg {
  font-size: 18px;
  line-height: 1.75rem;
}

.leading-tight {
  line-height: 1.25;
}

.leading-8 {
  line-height: 32px;
}

.leading-7 {
  line-height: 28px;
}

.leading-normal {
  line-height: 1.5;
}

.mx-8 {
  margin-left: 32px;
  margin-right: 32px;
}

.mb-6 {
  margin-bottom: 24px !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-10 {
  margin-bottom: 40px;
}

.mb-12 {
  margin-bottom: 3rem !important;
}

.mt-8 {
  margin-top: 2rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.-mr-3 {
  margin-right: -12px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-3 {
  margin-bottom: 12px !important;
}

.mb-16 {
  margin-bottom: 4rem;
}

.text-sm {
  font-size: 14px;
  line-height: 20px;
}

.text-xl {
  font-size: 20px;
  line-height: 28px;
}

.text-2xl {
  font-size: 24px;
}

.text-32 {
  font-size: 32px;
}

.circle-shape, .section-title.circle-shape {
  z-index: 1;
}

.circle-shape::before, .section-title.circle-shape::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  content: "";
  display: block;
  background-color: #FFB646;
  border-radius: 100%;
  width: 70px;
  height: 70px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .circle-shape::before, .section-title.circle-shape::before {
    width: 85px;
    height: 85px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .circle-shape::before, .section-title.circle-shape::before {
    width: 100px;
    height: 100px;
  }
}
@media only screen and (min-width: 1441px) {
  .circle-shape::before, .section-title.circle-shape::before {
    width: 120px;
    height: 120px;
  }
}

.section-title {
  font-size: 36px;
  letter-spacing: -1.5px;
  line-height: 1;
}
.section-title.circle-shape::before {
  top: 2px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title.circle-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title.circle-shape::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title.circle-shape::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title {
    font-size: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .section-title {
    font-size: 64px;
  }
}
.section-title .portfolio-shape::before {
  top: 4px;
  left: -6px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .portfolio-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .portfolio-shape::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .portfolio-shape::before {
    width: 64px;
    height: 64px;
  }
}
.section-title .portfolio-shape2 {
  z-index: 1;
}
.section-title .portfolio-shape2::before {
  top: 2px;
  left: 15px;
  width: 36px;
  height: 36px;
}
@media only screen and (max-width: 575px) {
  .section-title .portfolio-shape2::before {
    top: 4px;
    left: 10px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .portfolio-shape2::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .portfolio-shape2::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .portfolio-shape2::before {
    width: 64px;
    height: 64px;
  }
}
.section-title .testimonial-shape::before {
  top: 4px;
  left: -2px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .testimonial-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .testimonial-shape::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .testimonial-shape::before {
    width: 64px;
    height: 64px;
  }
}
.section-title .blog-shape::before {
  top: 8px;
  left: 20px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .blog-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .blog-shape::before {
    width: 69px;
    height: 69px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .blog-shape::before {
    width: 69px;
    height: 69px;
  }
}
.section-title .blog-shape-inner::before {
  top: 8px;
  left: 20px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .blog-shape-inner::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .blog-shape-inner::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .blog-shape-inner::before {
    width: 64px;
    height: 64px;
  }
}
.section-title .priceing-shape::before {
  top: 13px;
  left: -4px;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .priceing-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .priceing-shape::before {
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .priceing-shape::before {
    width: 64px;
    height: 64px;
  }
}
.section-title .footer-shape::before {
  top: 8px;
  left: 0;
  width: 36px;
  height: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-title .footer-shape::before {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .section-title .footer-shape::before {
    width: 60px;
    height: 60px;
  }
}
@media only screen and (min-width: 1441px) {
  .section-title .footer-shape::before {
    width: 60px;
    height: 60px;
  }
}

.pt-6 {
  padding-top: 1.5rem !important;
}

.pt-12 {
  padding-top: 3rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pt-140 {
  padding-top: 140px;
}

.pb-90 {
  padding-bottom: 90px;
}

.py-120 {
  padding-top: 120px;
  padding-bottom: 120px;
}

.py-72 {
  padding-top: 72px;
  padding-bottom: 72px;
}

.py-7 {
  padding-top: 1.75rem !important;
  padding-bottom: 1.75rem !important;
}

.py-6px {
  padding-top: 6px;
  padding-bottom: 6px;
}

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}

.px-38 {
  padding-left: 38px;
  padding-right: 38px;
}

.pb-120 {
  padding-bottom: 120px;
}

.gap-2 {
  gap: 8px !important;
}

.row-gap-24 {
  row-gap: 24px;
}

.gap-y-2 {
  row-gap: 8px !important;
}

.leading-none {
  line-height: 1;
}

.gap-3 {
  gap: 12px !important;
}

.gap-8 {
  gap: 32px !important;
}

.gap-10 {
  gap: 40px !important;
}

.gap-x-4 {
  -moz-column-gap: 16px !important;
       column-gap: 16px !important;
}

.gap-y-5 {
  row-gap: 20px !important;
}

.gap-6 {
  gap: 24px !important;
}

.strock-text {
  margin-top: 20px;
  font-family: "Syne", sans-serif;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.5px;
  color: white;
  text-shadow: 1px 1px 0 rgba(8, 8, 8, 0.4), -1px -1px 0 rgba(8, 8, 8, 0.4), 1px -1px 0 rgba(8, 8, 8, 0.4), -1px 1px 0 rgba(8, 8, 8, 0.4), 1px 1px 0 rgba(8, 8, 8, 0.4);
}

.text-black-text-800 {
  color: rgba(8, 8, 8, 0.8);
}

.featured-properties {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: rgba(8, 8, 8, 0.04);
}
@media only screen and (min-width: 992px) and (max-width: 1199px), only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .featured-properties {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

a {
  transition: all linear;
  transition-duration: 300ms;
}

.success {
  color: #4CAF50;
}

.error {
  color: #F44336;
}

.counter:not(.is-visible) {
  visibility: hidden;
}

.w-110px {
  width: 110px;
}

.dot {
  z-index: 1;
  padding-left: 16px;
}
.dot::before {
  display: block;
  content: "";
  top: 2px;
  width: 8px;
  height: 8px;
  background-color: #FF9330;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
  transform: translateY(-50%);
  border-radius: 100%;
}

.rounded-20 {
  border-radius: 20px;
}

.rounded-40 {
  border-radius: 40px;
}

.text-xs {
  font-size: 12px;
  line-height: 1rem;
}

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.leading-10 {
  line-height: 2.5rem;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.px-8 {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}

.gap-4 {
  gap: 1rem !important;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-none {
  flex: none;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.text-15 {
  font-size: 15px;
}

.mt-3 {
  margin-top: 0.75rem !important;
}

.mb-4 {
  margin-bottom: 1rem !important;
}

.mb-5 {
  margin-bottom: 1.25rem !important;
}

.rounded-2xl {
  border-radius: 1rem !important;
}

.fill-primary {
  fill: #FFB646;
}

.mb-120 {
  margin-bottom: 120px;
}

.mb-14 {
  margin-bottom: 3.5rem !important;
}

.max-w-1075 {
  max-width: 1075px;
}

.leading-snug {
  line-height: 1.375;
}

.gap-y-6 {
  row-gap: 24px !important;
}

.banner-contents {
  padding-left: 16px;
  padding-right: 16px;
}
@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .banner-contents {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.max-w-950 {
  max-width: 950px;
}

.mb-9 {
  margin-bottom: 36px !important;
}

.gap-23 {
  gap: 23px;
}

@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .header {
    padding-left: 48px;
  }
}

.header-inner {
  padding-left: 16px;
}
@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .header-inner {
    padding-left: 0;
  }
}

.header-border-bottom {
  border-bottom: 1px solid rgba(8, 8, 8, 0.4);
}

.offcanvas-toggle {
  padding: 28px 38px;
}

.contact-link {
  margin-right: 8px;
  padding: 6px 12px;
  font-size: 15px;
}
.contact-link:hover {
  color: #FF9330 !important;
}
.contact-link:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-link:hover {
    color: #FFFFFF !important;
  }
}
.contact-link.hover-text-white:hover {
  color: #FFFFFF !important;
}

.animate-arrow-up {
  display: inline-block;
  margin-left: 12px;
}

@-webkit-keyframes moveUp {
  0% {
    opacity: 1;
    transform: translateX(0px) translateY(0px) scale(1);
  }
  25% {
    opacity: 0;
    transform: translateX(10px) translateY(-10px) scale(0.9);
  }
  26% {
    opacity: 0;
    transform: translateX(-10px) translateY(10px) scale(0.9);
  }
  55% {
    opacity: 1;
    transform: translateX(0px) translateY(0px) scale(1);
  }
}

@keyframes moveUp {
  0% {
    opacity: 1;
    transform: translateX(0px) translateY(0px) scale(1);
  }
  25% {
    opacity: 0;
    transform: translateX(10px) translateY(-10px) scale(0.9);
  }
  26% {
    opacity: 0;
    transform: translateX(-10px) translateY(10px) scale(0.9);
  }
  55% {
    opacity: 1;
    transform: translateX(0px) translateY(0px) scale(1);
  }
}
.offcanvas {
  padding-left: 2rem;
  width: 350px !important;
  min-height: 700px;
}
@media only screen and (min-width: 768px) and (max-width: 991px), only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .offcanvas {
    width: 460px !important;
  }
}

.offcanvas-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 80px;
  padding: 0 !important;
}

.offcanvas-close {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  padding-left: 38px;
  padding-right: 38px;
}

.offcanvas-nav {
  margin-right: 40px;
}

.offcanvas-menu-item {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.offcanvas-menu-item:hover a {
  color: #FF9330 !important;
}
.offcanvas-menu-item:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}

.offcanvas-menu-link {
  transition-duration: 300ms;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.offcanvas-social-links li a {
  transition-duration: 300ms;
}
.offcanvas-social-links li a:hover {
  color: #FF9330 !important;
}

@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .white-header {
    padding-left: 3rem;
  }
}

.white-bg-header {
  padding-left: 1rem;
}
@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .white-bg-header {
    padding-left: 0px;
  }
}

.contact-link-warning {
  color: rgba(8, 8, 8, 0.95);
}
.contact-link-warning:hover {
  color: #FF9330;
}
.contact-link-warning:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}

.footer {
  padding-top: 80px;
  padding-bottom: 60px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer {
    padding-top: 100px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px), only screen and (min-width: 1441px) {
  .footer {
    padding-top: 120px;
  }
}

.service-contact-card-footer {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
}
.service-contact-card-footer:hover a {
  color: #FF9330 !important;
}
.service-contact-card-footer:hover .animate-arrow-up {
  -webkit-animation: moveUp 0.8s linear;
          animation: moveUp 0.8s linear;
}`}</style>
      <section class="bg-white pt-20 pb-120">
        <div class="container mx-auto">
          <div class="row">
            <div
              class="col-12 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="400"
            >
              <div class="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
                <span class="text-warning text-xl">Portfolio</span>
                <h3 class="section-title text-dark">
                  My recent{" "}
                  <span class="position-relative circle-shape portfolio-shape">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>
          </div>

          <div class="row g-6">
            <div
              class="col-12 col-md-6 col-lg-5 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="600"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project1.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-7 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="800"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project6.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="1000"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project3.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="1200"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project4.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-4 aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="1400"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project5.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Apps{" "}
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-7 aos-init" data-aos="flip-down">
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project6.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 col-lg-5 aos-init"
              data-aos="flip-down"
              data-aos-delay="300"
            >
              <div class="overflow-hidden position-relative project-item">
                <img
                  class="w-100 h-100"
                  src="assets/images/portfolios/project7.png"
                  alt="project1"
                />
                <div class="position-absolute project-item-content">
                  <div class="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 class="fw-bold font-Syne text-center leading-10 project-title">
                      <a class="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" class="animate-arrow-up">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fill-opacity="0.9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style13;
