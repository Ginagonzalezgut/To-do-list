function Features() {
  return (
    <div className="features">
      <h1 className="features__title">What TaskMaster does</h1>
      <div className="features__grid">
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <div className="features__item" key={number}>
            <h2 className="features__item__title">Easy to get started</h2>
            <p className="features__item__desc">
              A simple and intuitive setup so you can start organizing your
              tasks in minutes, without any hassle.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
