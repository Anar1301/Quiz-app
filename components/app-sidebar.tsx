import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex items-center mx-4 justify-between  gap-20 mt-4 ">
        <div className="font-extrabold h-7">History</div>
        <SidebarTrigger className="h-6 w-6  " />
      </div>

      <SidebarHeader />
      <SidebarContent>
        <div className="mx-4">
          <div className="h-6 font-semibold ">Genghis Khan</div>
          <div className="h-6 font-semibold ">Figma ашиглах заавар</div>
          <div className="h-6 font-semibold ">Санхүүгийн шийдвэрүүд</div>
          <div className="h-6 font-semibold ">
            Figma-д загвар зохион бүтээх аргачлалууд
          </div>
          <br />
          <div className="h-6 font-semibold ">Санхүүгийн технологи 2023</div>
        </div>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
