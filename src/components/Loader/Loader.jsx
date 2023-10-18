import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box sx={{ display: "flex" }}>
        {/* first loader */}
        <div className={css.loader}>
          <div data-glitch="Loading..." className={css.glitch}>
            Loading...
          </div>
        </div>

        {/* second loader */}
        {/* <div className={css.spinner}></div> */}

        {/* third loader */}
        {/* <div className={css.loader}>Loading...</div> */}

        {/* forth loader */}
        {/* <div className={css.loader}></div> */}
      </Box>
    </Backdrop>
  );
};
