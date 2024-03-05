import { getOfFestividades, getIdFestividad, PostofFestividad, put_Festividades, delete_Festividad_Service} from "../services/festividad.service.js";

export const getFestividades = async (req, res) => {
  try {
    const result = await getOfFestividades();

    return res.status(200).json({
      message: "¡Funciona correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getbyIdFestividades = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getIdFestividad(id);

    return res.status(200).json({
      message: "¡Funciona correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const PostFestividades = async (req, res) => {
    try {
      const data = req.body
      await PostofFestividad(data);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const putFestividadesControlller = async (req, res) => {
    try {
        const {id} = req.params;
        const festividad = req.body;
      
        put_Festividades(festividad, id)
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const deleteFestividadesControlller = async (req, res) => {
    try {
        const {id} = req.params;
        delete_Festividad_Service(id);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
  
  
