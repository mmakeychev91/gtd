const initImgLazyLoad = () => {
  const lazyLazy = new imgLazyLoad({
    elements_selector: '.lazy',
    use_native: true,
  });
  lazyLazy.update();
};

export default initImgLazyLoad;
