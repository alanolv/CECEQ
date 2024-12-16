import './carousels.css';
import BannerCadaTodos from "../../sources/images/PagesBanners/bannerCasaDeTodos.png"
import Cultura360 from "../../sources/images/PagesBanners/cultura360.png"
import eje5 from "../../sources/images/PagesBanners/eje5.png"

export default function Carrusel() {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={BannerCadaTodos} class="d-block w-100 custom-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Cultura360} class="d-block w-100 custom-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={eje5} class="d-block w-100 custom-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}