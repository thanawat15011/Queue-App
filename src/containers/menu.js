import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const accessMenu = () => {
  const menu_appbar = []  
  //#region ----------menu_appbar------------------

  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "หน้าหลัก",
      to: "/",
      icon: <HomeIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "ข้อมูลส่วนตัว",
      to: "/building/view",
      icon: <PersonIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "ปฏิทินการประชุม",
      to: "/academic/view",
      icon: <CalendarMonthIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "การลา",
      to: "/upload/view",
      icon: <ListAltIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "การลงมติ",
      to: "/upload/view",
      icon: <HowToVoteIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "อนุมัติยานพาหนะ",
      to: "/upload/view",
      icon: <DirectionsCarIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "การทำงาน",
      to: "/upload/view",
      icon: <WorkIcon/>
    })
  }
  if (1) {
    menu_appbar.push({
      tag: "NavItem",
      name: "ติดต่อเจ้าหน้าที่",
      to: "/upload/view",
      icon: <ContactPhoneIcon/>
    })
  }
  //#endregion
  const main_menu = []
  //#region ------------------main_menu-----------------//
  if (menu_appbar.length) {
    main_menu.push({
      title: "เมนูหลัก",
      title_item: [...menu_appbar],
    })
  }
  return main_menu;
}
export default accessMenu
