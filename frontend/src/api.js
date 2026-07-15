import axios from "axios";
const api = axios.create({
 baseURL: "http://127.0.0.1:8005"
});
export default api;
export const analyzeTicket = async (description) => {
 const res = await api.post("/analyze", {
   description
 });
 return res.data;
};
export const uploadCSV = async (file) => {
 const formData = new FormData();
 formData.append("file", file);
 const res = await api.post("/upload", formData);
 return res.data;
};
export const getDashboard = async () => {
 const res = await api.get("/dashboard");
 return res.data;
};
export const getHistory = async () => {
 const res = await api.get("/history");
 return res.data;
};