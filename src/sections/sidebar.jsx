import { Item } from "@/components/Item"
export const Sidebar = () => {
  return(
      <aside className="fixed left-0 z-40 w-64 min-h-screen overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
          <div className="py-4 text-gray-500 dark:text-gray-400">
              <ul className="mt-6">
              <Item text="Dashboard" href="#"/>
              <Item text="Productos" href="#"/>
              <Item text="Usuarios" href="#"/>
              <Item text="Pedidos" href="#"/>
                  
              </ul>
          </div>
      </aside>
  )
}
