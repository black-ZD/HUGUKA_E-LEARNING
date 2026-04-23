import { useEffect, useState } from "react";
import apiClient from "../api/apiCrient";
import { Pencil, Trash2 } from "lucide-react";
import EditModuleModal from "./EditModuleModal";

export default function ListModule() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  // ---------------- FETCH MODULES ----------------
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await apiClient.get("/module");
        setModules(res.data.data || []);
      } catch (err) {
        setError("Failed to load modules");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  // ---------------- DELETE MODULE ----------------
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this module?");
    if (!confirmDelete) return;

    try {
      setActionLoading(true);

      await apiClient.delete(`/module/${id}`);

      setModules((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert("Delete failed");
    } finally {
      setActionLoading(false);
    }
  };

  // ---------------- UPDATE MODULE ----------------
  const handleUpdate = async (updatedModule) => {
    try {
      setActionLoading(true);

      const res = await apiClient.put(
        `/module/${updatedModule.id}`,
        updatedModule
      );

      const updated = res.data;

      setModules((prev) =>
        prev.map((m) =>
          m.id === updated.id ? updated : m
        )
      );

      setIsOpen(false);
      setSelectedModule(null);
    } catch (err) {
      alert("Update failed");
    } finally {
      setActionLoading(false);
    }
  };

  // ---------------- LOADING STATE ----------------
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading modules...
      </div>
    );
  }

  // ---------------- ERROR STATE ----------------
  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Modules</h1>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Code</th>
              <th className="p-3">Trainer</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {/* EMPTY STATE */}
            {modules.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-10 text-gray-500">
                  No modules found
                </td>
              </tr>
            ) : (

              modules.map((m, index) => (
                <tr
                  key={m.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="p-3 text-center">
                    {index + 1}
                  </td>

                  <td className="p-3 font-medium">
                    {m.moduleName}
                  </td>

                  <td className="p-3">
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">
                      {m.moduleCode}
                    </span>
                  </td>

                  <td className="p-3">
                    {m.moduleTrainer}
                  </td>

                  <td className="p-3 text-gray-500">
                    {m.moduleDescription}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3">

                    <div className="flex justify-center gap-2">

                      <button
                        disabled={actionLoading}
                        onClick={() => {
                          setSelectedModule(m);
                          setIsOpen(true);
                        }}
                        className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>

                      <button
                        disabled={actionLoading}
                        onClick={() => handleDelete(m.id)}
                        className="flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))

            )}

          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <EditModuleModal
        isOpen={isOpen}
        module={selectedModule}
        onClose={() => setIsOpen(false)}
        onSave={handleUpdate}
      />

    </div>
  );
}