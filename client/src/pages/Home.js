const Home = () => {

  return (
    <div className="card bg-white card-rounded w-50">
      <section class="container-fluid hero-img">

{/* Main Header on hero image */}
<h3 class="font-weight-bold jumbotron-fluid hero-text">Toptier cabinets refinishing</h3>

{/* All elements within the hero section are placed within a card element */}
<div class="flex-column card hero-card border-0 bg-transparent align-items-end">
    <div class="card-header">
        <p class="hero-desc">
            Company in Cabinet Refinishing in the Orlando and the Florida area.
            We work to be the Best!! and to Exceed Expectation!!
        </p>
    </div>
    <div class="card-body">
        <input type="button"
               value="See Gallery &raquo;"
               class="btn btn-primary hero-btn"
              /* Do on Click to Gallery Page */ />
    </div>
</div>
</section>

<div class="row">
<div class="col-md-4">
    <h2>Who are we?</h2>
    <p>
        Toptier cabinets refinishing , Company in Cabinet Refinishing in the Orlando and the Florida area. We work to be the Best!! and to Exceed Expectation!!
        contact us for a free estimate
    </p>
    <p><a class="btn btn-default" href="">Learn more &raquo;</a></p>
</div>
<div class="col-md-4">
    <h2>We can Help!</h2>
    <p>
        Toptier cabinets refinishing , Company in Cabinet Refinishing in the Orlando and the Florida area. We work to be the Best!! and to Exceed Expectation!!
        contact us for a free estimate.
    </p>
    <p><a class="btn btn-default" href="">Learn more &raquo;</a></p>
</div>
<div class="col-md-4">
    <h2>Testimonials</h2>
    <p>See what people say about us. While at it, feel free to leave us a review.</p>
    <p><a class="btn btn-default" href="">Learn more &raquo;</a></p>
</div>
</div>
    </div>
  );
};

export default Home;
