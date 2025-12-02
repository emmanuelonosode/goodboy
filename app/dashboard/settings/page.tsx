"use client";

import { useState } from "react";
import { mockUser } from "@/lib/mock-data";
import { User, Shield, Bell, Save } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    toast.success("Settings saved successfully");
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and security.</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64">
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "security", label: "Security", icon: Shield },
              { id: "notifications", label: "Notifications", icon: Bell },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-metallic-gold/10 text-metallic-gold"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white">Profile Information</h2>
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-metallic-gold to-yellow-600" />
                <div>
                  <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                    Change Avatar
                  </button>
                  <p className="mt-2 text-xs text-gray-400">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">Full Name</label>
                  <input
                    type="text"
                    defaultValue={mockUser.name}
                    className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:border-metallic-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">Email Address</label>
                  <input
                    type="email"
                    defaultValue={mockUser.email}
                    className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:border-metallic-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white">Security Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">Current Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:border-metallic-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:border-metallic-gold focus:outline-none"
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                  </div>
                  <button className="rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500 hover:bg-emerald-500/20">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  "Email me about new investment plans",
                  "Email me when deposit is confirmed",
                  "Email me when withdrawal is processed",
                  "Weekly newsletter",
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-white/10 bg-black/20" />
                    <span className="text-gray-300">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 border-t border-white/10 pt-6">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-metallic-gold to-yellow-600 px-6 py-2.5 font-bold text-black transition-opacity disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
              {!loading && <Save className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
