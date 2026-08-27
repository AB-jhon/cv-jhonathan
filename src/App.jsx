import { useState, useEffect } from "react";
import foto from './assets/foto.jpeg'


const cvData = {
  name: "Jhonathan Anota",
  title: "Data Analyst | SQL Server | Power BI | Business Intelligence & Web Developer",
  about:
    "Ingeniero en Sistemas Computacionales especializado en el análisis de información operativa, administración de bases de datos, generación de KPIs y desarrollo de soluciones digitales para la toma de decisiones empresariales.",
  contact: {
    phone: "5544762718",
    address: "Gral. Jesús Carranza #41, Col. Ampliación Caracol, C.P. 15650 CDMX",
    email: "jhonathanbadillo3@gmail.com",
    github: "https://github.com/AB-jhon",
  },
  skills: {
    analisis: ["SQL Server (T-SQL)", "Power BI", "Power Query", "Excel Avanzado", "FastReport"],
    desarrollo: ["React.js", "JavaScript (ES6+)", "Vite", "HTML5 / CSS3", "Tailwind CSS / UI-UX"],
    bases: ["PostgreSQL", "Supabase", "Python", "C# / .NET"],
    herramientas: ["Git", "GitHub", "Vercel", "Netlify", "VS Code"],
    languages: ["Inglés (Nivel A1 - Estudiando activamente para alcanzar B1)"],
  },
  education: [
    { title: "Lic. Ingeniería en Sistemas Computacionales", school: "Centro Universitario San Ángel", years: "2010 - 2014" },
    { title: "Especialidad en Diseño Web", school: "Centro Universitario San Ángel", years: "2014 - 2016" },
    { title: "Certificado en Administración de Bases de Datos", school: "INTELLEMX Online", years: "2019" },
    { title: "Certificado SQL Server", school: "Udemy", years: "2025" },
    { title: "Diseño Web Profesional enfocado en arquitecturas modernas", school: "Udemy", years: "En curso" },
  ],
  experience: [
    {
      company: "INFOBLOCK",
      role: "Ingeniero de implementación",
      years: "2019 – 2025",
      items: [
        "Lideré y coordiné equipos de soporte en sitio, gestionando la mesa de atención para la resolución eficiente de incidencias técnicas críticas.",
        "Personalicé interfaces de usuario para sistemas de nómina y asistencia (TimeBLOCK), aplicando principios de UI/UX y arquitectura modular.",
        "Diseñé y optimicé reportes operativos y dashboards ejecutivos en Power BI y FastReport, transformando datos de asistencia y prenómina en métricas estratégicas para la toma de decisiones.",
        "Desarrollé consultas complejas y optimicé bases de datos en SQL Server, mejorando el flujo de información operativa y la gestión de reglas de negocio.",
        "Capacité a clientes en el uso de la plataforma TimeBLOCK y elaboré documentación técnica, incrementando la adopción digital de la herramienta y reduciendo re-trabajos de soporte.",
      ],
    },
    {
      company: "COMPARTAMOS BANCO",
      role: "Desarrollo y soporte técnico",
      years: "2016 – 2019",
      items: [
        "Administré y configuré aplicaciones operativas críticas, incluyendo el software financiero JKASSA y herramientas institucionales, garantizando la alta disponibilidad del sistema.",
        "Desarrollé macros y automatizaciones en Visual Basic, optimizando flujos de trabajo administrativos y reduciendo significativamente los tiempos de procesamiento operativo.",
        "Diagnostiqué y resolví incidencias en sistemas financieros, ejecutando mantenimiento correctivo y optimizando la continuidad del negocio.",
        "Documenté procesos técnicos y elaboré guías operativas, facilitando la adopción de herramientas digitales y reduciendo recurrencia de tickets de soporte.",
      ],
    },
    {
      company: "SEDATU (Secretaria de Desarrollo Agrario, Territorial y Urbano)",
      role: "Administrador de Sistemas & Soporte de TI",
      years: "2014 – 2016",
      items: [
        "Administré la infraestructura tecnológica institucional, garantizando la disponibilidad y la continuidad operativa de los servicios para usuarios de distintas áreas.",
        "Gestioné cuentas de usuario, perfiles y políticas de acceso mediante Active Directory, asegurando el cumplimiento de los estándares de seguridad informática.",
        "Elaboré diagnósticos técnicos y resolví incidencias de segundo nivel, estandarizando procesos de atención para reducir la recurrencia de fallas operativas.",
        "Coordiné requerimientos tecnológicos con áreas internas y brindé capacitación, facilitando la adopción de herramientas institucionales y la optimización de procesos.",
      ],
    },
  ],
};

const skillColors = {
  analisis: "#2563EB",
  desarrollo: "#0891B2",
  bases: "#6366F1",
  herramientas: "#52F5A3",
};

export default function CV() {
  const [dark, setDark] = useState(true);
  const [activeExp, setActiveExp] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const bg = dark ? "#0F172A" : "#F8FAFC";
  const surface = dark ? "#1E293B" : "#FFFFFF";
  const surfaceAlt = dark ? "#162032" : "#F1F5F9";
  const text = dark ? "#E2E8F0" : "#1E293B";
  const textMuted = dark ? "#94A3B8" : "#64748B";
  const accent = "#2563EB";
  const accentLight = dark ? "#1D4ED8" : "#3B82F6";
  const border = dark ? "#334155" : "#E2E8F0";


  return (
    <div style={{
      minHeight: "100vh",
      background: bg,
      color: text,
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      transition: "all 0.4s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        .fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
        .chip:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37,99,235,0.3); }
        .exp-btn:hover { background: rgba(37,99,235,0.15) !important; }
        .toggle-btn:hover { opacity: 0.8; }
        .link-hover:hover { color: #2563EB !important; }
        .expand-item { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .expand-item.open { max-height: 1000px; }
      `}</style>

      {/* Header bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: dark ? "rgba(15,23,42,0.85)" : "rgba(248,250,252,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${border}`,
        padding: "12px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: accent, letterSpacing: "1px" }}>
          CV JAB
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          
          <button
            className="toggle-btn"
            onClick={() => setDark(!dark)}
            style={{
              background: "none", border: `1px solid ${border}`, borderRadius: "20px",
              padding: "6px 16px", cursor: "pointer", color: text, fontSize: "12px",
              transition: "all 0.3s", display: "flex", alignItems: "center", gap: "6px",
            }}>
            {dark ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>
      </div>

      <div id="cv-content" style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "300px 1fr", gap: "32px" }}>

        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Profile Card */}
          <div className="fade-in" style={{
            background: surface, borderRadius: "20px", padding: "32px 24px",
            textAlign: "center", border: `1px solid ${border}`,
            animationDelay: "0.1s",
            boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
          }}>
           {/* Photo */}
            <img src={foto} alt="Jhonathan Anota Badillo"
              style={{
                width: "170px", height: "200px", borderRadius: "50%",
                objectFit: "cover", objectPosition: "center 25%",
                margin: "0 auto 16px", display: "block",
                boxShadow: "0 8px 24px rgba(37,99,235,0.4)",
                border: "3px solid #2563EB",
              }}
            />

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", lineHeight: 1.2, marginBottom: "8px" }}>
              Jhonathan Anota
            </h1>
            <p style={{ color: accent, fontSize: "12px", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Data Analyst | SQL Server | Power BI | Business Intelligence & Web Developer
            </p>

            <div style={{ width: "40px", height: "2px", background: accent, margin: "16px auto" }} />

            {/* Soft skills chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginTop: "8px"}}>
              {[
                { icon: "🤝", label: "Colaboración interdisciplinaria" },
                { icon: "⚡", label: "Agilidad de aprendizaje" },
                { icon: "🔄", label: "Flexibilidad operativa ante cambios de entorno" },
                { icon: "✅", label: "Compromiso con la excelencia y cumplimiento de objetivos" },
                { icon: "🎨", label: "Desarrollo de interfaces centradas en el usuario (UI/UX)" },
              ] .map ((skill, i) => (
                <span key={i} style={{
                  background: `#2563EB18`,
                  color: "#2563EB",
                  border: `1px solid #2563EB40`,
                  borderRadius: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  fontSize: "12px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }} >
                  {skill.icon} {skill.label}
                </span>
              ))}
            </div>

           </div>

          {/* Contact */}
          <div className="fade-in" style={{
            background: surface, borderRadius: "20px", padding: "24px",
            border: `1px solid ${border}`, animationDelay: "0.2s",
            boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "16px", fontWeight: "600" }}>
              Contacto
            </h3>
            {[
              { icon: "📱", val: cvData.contact.phone },
              { icon: "📍", val: cvData.contact.address },
              { icon: "✉️", val: cvData.contact.email, link: `mailto:${cvData.contact.email}` },
              { icon: "🐙", val: "GitHub", link: cvData.contact.github },
              { icon: "🌐", val: "Portfolio Web", link: cvData.contact.web },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "14px", marginTop: "2px" }}>{c.icon}</span>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer"
                    className="link-hover"
                    style={{ fontSize: "13px", color: textMuted, textDecoration: "none", transition: "color 0.2s", wordBreak: "break-all" }}>
                    {c.val}
                  </a>
                ) : (
                  <span style={{ fontSize: "13px", color: textMuted }}>{c.val}</span>
                )}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="fade-in" style={{
            background: surface, borderRadius: "20px", padding: "24px",
            border: `1px solid ${border}`, animationDelay: "0.3s",
            boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "16px", fontWeight: "600" }}>
              Habilidades
            </h3>
            {[
              { label: "Análisis & BI", items: cvData.skills.analisis, color: "#2563EB" },
              { label: "Desarrollo Web & Frontend", items: cvData.skills.desarrollo, color: "#0891B2" },
              { label: "Bases de Datos & Scripting", items: cvData.skills.bases, color: "#6366F1" },
              { label: "Herramientas & Deployment", items: cvData.skills.herramientas, color: "#10B981" },
            ].map((group, gi) => (
              <div key={gi} style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "11px", color: textMuted, marginBottom: "8px", fontWeight: "500" }}>{group.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {group.items.map((s, i) => (
                    <span key={i} className="chip" style={{
                      background: `${group.color}18`,
                      color: group.color,
                      border: `1px solid ${group.color}40`,
                      borderRadius: "8px", padding: "4px 10px", fontSize: "12px",
                      fontWeight: "500", cursor: "default", transition: "all 0.2s",
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="fade-in" style={{
            background: surface, borderRadius: "20px", padding: "24px",
            border: `1px solid ${border}`, animationDelay: "0.4s",
            boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "16px", fontWeight: "600" }}>
              Educación
            </h3>
            {cvData.education.map((e, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "12px", borderLeft: `2px solid ${i === cvData.education.length - 1 ? accent : border}` }}>
                <p style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1.3", marginBottom: "2px" }}>{e.title}</p>
                <p style={{ fontSize: "12px", color: textMuted }}>{e.school}</p>
                <p style={{ fontSize: "11px", color: accent, marginTop: "2px" }}>{e.years}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* About full */}
          <div className="fade-in" style={{
            background: `linear-gradient(135deg, ${accent}18, #6366F118)`,
            borderRadius: "20px", padding: "28px",
            border: `1px solid ${accent}30`, animationDelay: "0.15s",
          }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "12px", fontWeight: "600" }}>
              Acerca de mí
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: textMuted }}>{cvData.about}</p>
          </div>

          {/* Experience */}
          <div className="fade-in" style={{ animationDelay: "0.25s" }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "16px", fontWeight: "600" }}>
              Experiencia Laboral
            </h3>

            {/* Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
              {cvData.experience.map((exp, i) => (
                <button key={i}
                  className="exp-btn"
                  onClick={() => setActiveExp(i)}
                  style={{
                    background: activeExp === i ? accent : "transparent",
                    color: activeExp === i ? "#fff" : textMuted,
                    border: `1px solid ${activeExp === i ? accent : border}`,
                    borderRadius: "10px", padding: "8px 16px", cursor: "pointer",
                    fontSize: "13px", fontWeight: "500", transition: "all 0.2s",
                  }}>
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Active experience */}
            {cvData.experience.map((exp, i) => (
              <div key={i} style={{ display: activeExp === i ? "block" : "none" }}>
                <div style={{
                  background: surface, borderRadius: "20px", padding: "28px",
                  border: `1px solid ${border}`,
                  boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
                    <div>
                      <h4 style={{ fontSize: "18px", fontFamily: "'Playfair Display', serif", marginBottom: "4px" }}>{exp.company}</h4>
                      <p style={{ color: accent, fontSize: "13px", fontWeight: "500" }}>{exp.role}</p>
                    </div>
                    <span style={{
                      background: `${accent}15`, color: accent,
                      border: `1px solid ${accent}30`,
                      borderRadius: "8px", padding: "4px 12px", fontSize: "12px", fontWeight: "500",
                    }}>{exp.years}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, marginTop: "7px", flexShrink: 0 }} />
                        <p style={{ fontSize: "13px", lineHeight: "1.7", color: textMuted }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline summary */}
          <div className="fade-in" style={{
            background: surface, borderRadius: "20px", padding: "28px",
            border: `1px solid ${border}`, animationDelay: "0.35s",
            boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.08)",
          }}>
            <h3 style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: accent, marginBottom: "20px", fontWeight: "600" }}>
              Línea de Tiempo
            </h3>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "7px", top: "8px", bottom: "8px", width: "2px", background: `linear-gradient(to bottom, ${accent}, #6366F1)`, borderRadius: "2px" }} />
              {[
                { year: "2010", label: "Inicio de Ingeniería en Sistemas" },
                { year: "2014", label: "Egreso universitario — Extend Solution" },
                { year: "2016", label: "Especialidad en Diseño Web — Compartamos Banco" },
                { year: "2019", label: "INFOBLOCK — Certificado BD" },
                { year: "2025", label: "SQL Server Cert. — Diseño Web Profesional" },
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "16px", paddingLeft: "24px", position: "relative" }}>
                  <div style={{
                    position: "absolute", left: "0", top: "4px",
                    width: "16px", height: "16px", borderRadius: "50%",
                    background: accent, border: `3px solid ${dark ? "#1E293B" : "#fff"}`,
                  }} />
                  <div>
                    <span style={{ fontSize: "11px", color: accent, fontWeight: "600" }}>{t.year}</span>
                    <p style={{ fontSize: "13px", color: textMuted, marginTop: "2px" }}>{t.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-in" style={{
            background: `linear-gradient(135deg, #6366F118, #0891B218)`,
            borderRadius: "20px", padding: "24px",
            border: `1px solid #6366F130`, animationDelay: "0.45s",
            display: "flex", alignItems: "center", gap: "16px",
          }}>
            <span style={{ fontSize: "28px" }}>🌐</span>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#6366F1", marginBottom: "4px", fontWeight: "600" }}>Idiomas</p>
              <p style={{ fontSize: "14px", color: text }}>{cvData.skills.languages[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "24px", borderTop: `1px solid ${border}`, color: textMuted, fontSize: "12px" }}>
        © 2025 Jhonathan Anota · Construido con React · Diseño UI propio
      </div>
    </div>
  );
}