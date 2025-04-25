// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={1.5}
      py={2}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
      >
        &copy; {new Date().getFullYear()}, thực hiện bởi nhóm đồ án &nbsp;
        <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </MDBox>
        <MDTypography variant="button" fontWeight="medium">
          &nbsp;Nguyễn Gia Quang, Dương Hoàng Sơn, Nguyễn Trung Hữu, Nguyễn Tùng Lâm&nbsp;
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default Footer;
