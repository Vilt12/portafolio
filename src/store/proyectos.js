import {create} from 'zustand';


    const Proyectos = create((set) => ({
        proyecto: true,
        setProyecto: (proyecto) => set({ proyecto }),
    }));
   
 



export default Proyectos