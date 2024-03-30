import { LightGalleryProps } from "lightgallery/react";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import "../styles/light-gallery.css";

const LightGalleryWrapper = ({
  children,
  ...rest
}: LightGalleryProps & { children: React.ReactNode }) => {
  return (
    <LightGallery
      speed={500}
      licenseKey="73CED229-21C944A4-B559F712-D82875AA"
      plugins={[lgThumbnail, lgZoom]}
      exThumbImage="data-external-thumb-image"
      {...rest}
    >
      {children}
    </LightGallery>
  );
};

export default LightGalleryWrapper;
