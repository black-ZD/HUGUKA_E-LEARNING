import { useState, useEffect } from "react";

export default function EditModuleModal({ isOpen, onClose, module, onSave }) {
  const [form, setForm] = useState({
    moduleName: "",
    moduleCode: "",
    moduleTrainer: "",
    moduleDescription: "",
  });

  useEffect(() => {
    if (module) {
      setForm({
        moduleName: module.moduleName || "",
        moduleCode: module.moduleCode || "",
        moduleTrainer: module.moduleTrainer || "",
        moduleDescription: module.moduleDescription || "",
      });
    }
  }, [module]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave({ ...module, ...form });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        
        <h2 className="text-xl font-bold mb-4">Edit Module</h2>

        <div className="space-y-3">
          <input
            name="moduleName"
            value={form.moduleName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Module Name"
          />

          <input
            name="moduleCode"
            value={form.moduleCode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Module Code"
          />

          <input
            name="moduleTrainer"
            value={form.moduleTrainer}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Trainer"
          />

          <textarea
            name="moduleDescription"
            value={form.moduleDescription}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Description"
          />
        </div>

        <div className="flex justify-end gap-2 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          > 
            Save
          </button>
        </div>

      </div>
    </div>
  );
}