import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Calendar, MessageSquare, ClipboardList, Settings } from "lucide-react";

export default function MathAdminDashboard() {
  const classes = [
    {
      name: "고1 A반",
      students: [
        {
          name: "홍길동",
          school: "안곡고",
          parentPhone: "010-1234-5678",
          studentPhone: "010-9876-5432"
        },
        {
          name: "김민수",
          school: "백마고",
          parentPhone: "010-2222-3333",
          studentPhone: "010-4444-5555"
        }
      ]
    },
    { name: "고1 B반", students: [] },
    { name: "고2 A반", students: [] },
    { name: "고3 실전반", students: [] }
  ];

  const selectedClass = classes[0];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-950 border-r border-yellow-500/20 p-6 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
            MATH ADMIN
          </h1>
          <p className="text-sm text-zinc-400 mt-1">민경우의 관리 시스템</p>
        </div>

        <nav className="space-y-3">
          {[
            { icon: Users, label: "학생관리" },
            { icon: MessageSquare, label: "문자관리" },
            { icon: ClipboardList, label: "시험관리" },
            { icon: Calendar, label: "달력관리" },
            { icon: Settings, label: "설정" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-left hover:bg-yellow-500/10 transition"
              >
                <Icon className="w-5 h-5 text-yellow-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 bg-zinc-900">
        {/* Top */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">학생 관리 - {selectedClass.name}</h2>
            <p className="text-zinc-400 mt-1">반별 학생 및 출석 현황 관리</p>
          </div>

          <div className="flex gap-3">
            <Input
              placeholder="학생 검색"
              className="bg-zinc-800 border-zinc-700 rounded-xl"
            />
            <Button className="rounded-xl bg-yellow-500 text-black hover:bg-yellow-400">
              학생 추가
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-950 border border-yellow-500/20 rounded-2xl">
            <CardContent className="p-6">
              <p className="text-zinc-400">총 학생 수</p>
              <h3 className="text-3xl font-bold mt-2">128명</h3>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border border-yellow-500/20 rounded-2xl">
            <CardContent className="p-6">
              <p className="text-zinc-400">오늘 결석</p>
              <h3 className="text-3xl font-bold mt-2">7명</h3>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border border-yellow-500/20 rounded-2xl">
            <CardContent className="p-6">
              <p className="text-zinc-400">활성 반</p>
              <h3 className="text-3xl font-bold mt-2">12개</h3>
            </CardContent>
          </Card>
        </div>

        {/* Class List */}
        <Card className="bg-zinc-950 border border-yellow-500/20 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">학생 목록</h3>
              <Button className="rounded-xl bg-yellow-500 text-black hover:bg-yellow-400">
                반 추가
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selectedClass.students.map((student, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#151515",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #333"
              }}
            >
              <h4 style={{ fontSize: "20px" }}>
                {student.name} / {student.school}
              </h4>
              <p style={{ color: "#999", marginTop: "10px" }}>
                부모님 {student.parentPhone}
              </p>
              <p style={{ color: "#999", marginTop: "6px" }}>
                학생 {student.studentPhone}
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#d4af37",
                    color: "black",
                    cursor: "pointer"
                  }}
                >
                  출석
                </button>
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "1px solid #555",
                    backgroundColor: "transparent",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  결석
                </button>
              </div>
            </div>
          ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
