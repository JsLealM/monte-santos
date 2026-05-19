import { useState, useRef, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useGlobalReveal } from './hooks/useReveal';
import FormalizacionChart from './components/FormalizacionChart';
import './App.css';


/* =========================================================
   THEME TOGGLE
   ========================================================= */
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
    >
      <span className={`theme-toggle__icon ${theme === 'light' ? 'is-active' : ''}`}>
        <MoonIcon />
      </span>
      <span className={`theme-toggle__icon ${theme === 'dark' ? 'is-active' : ''}`}>
        <SunIcon />
      </span>
    </button>
  );
}

/* =========================================================
   NAVIGATION / SIDEBAR
   ========================================================= */
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function Sidebar({ isOpen, onClose, activeView, setView }) {
  const handleSelect = (view) => {
    setView(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`sidebar__overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <nav className={`sidebar ${isOpen ? 'is-open' : ''}`} aria-label="Menú principal">
        <div className="sidebar__header">
          <button className="sidebar__close" onClick={onClose} aria-label="Cerrar menú">
            <CloseIcon />
          </button>
        </div>
        <div className="sidebar__content">
          <p className="sidebar__title">Contenidos</p>
          <ul className="sidebar__nav">
            <li>
              <button 
                className={`sidebar__link ${activeView === 'information' ? 'is-active' : ''}`}
                onClick={() => handleSelect('information')}
              >
                Conoce La Mesa de los Santos
              </button>
            </li>
            <li>
              <button 
                className={`sidebar__link ${activeView === 'formalization' ? 'is-active' : ''}`}
                onClick={() => handleSelect('formalization')}
              >
                Turismo, Formalización y Sostenibilidad
              </button>
            </li>
            <li>
              <button 
                className={`sidebar__link ${activeView === 'infografia' ? 'is-active' : ''}`}
                onClick={() => handleSelect('infografia')}
              >
                Poster Informativo
              </button>
            </li>
            <li>
              <button 
                className={`sidebar__link ${activeView === 'bibliography' ? 'is-active' : ''}`}
                onClick={() => handleSelect('bibliography')}
              >
                Fuentes Bibliográficas
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

/* =========================================================
   COMMON COMPONENTS
   ========================================================= */
function PhotoBreak({ src, alt, caption }) {
  return (
    <figure className="photo-break reveal">
      <img className="photo-break__img" src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className="photo-break__caption">{caption}</figcaption>}
    </figure>
  );
}

/* =========================================================
   VIEW 1: INFORMACIÓN ANTERIOR (Documental Original)
   ========================================================= */
function InformationView() {
  return (
    <div className="view-content fade-in">
      <section className="hero">
        <div className="hero__image-wrap">
          <img className="hero__image" src="/images/hero.png" alt="La Mesa de los Santos" loading="eager" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <p className="hero__kicker">Santander, Colombia</p>
          <h1 className="hero__title">La Mesa<br />de los Santos</h1>
          <p className="hero__subtitle">Un documento sobre la geografía, la historia y la vida en uno de los paisajes más singulares de los Andes orientales colombianos.</p>
        </div>
      </section>

      <section className="section intro">
        <div className="section__inner">
          <div className="intro__content reveal">
            <p className="intro__lead">La Mesa de los Santos es un municipio de Los Santos, fundado en 1748, aunque la ocupación humana del territorio se remonta a los pueblos Guane, quienes habitaron estas tierras durante siglos antes de la llegada española.</p>
            <p className="section__text">Este documento recoge información geográfica, histórica y cultural sobre la meseta, sus ecosistemas, su arquitectura vernácula y las comunidades que la habitan. Las fuentes bibliográficas se encuentran al final del documento.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Geografía</p>
          <div className="grid-asym">
            <div className="reveal">
              <h2 className="section__heading">Entre el cañón y el páramo</h2>
              <div className="section__text">
                <p>La Meseta de los Santos ocupa una posición geológica singular: es una planicie elevada de origen sedimentario, delimitada al occidente por el Cañón del Chicamocha y al oriente por las estribaciones del páramo de Berlín. Esta ubicación le confiere un microclima particular, con temperaturas templadas constantes y una luminosidad que favorece el cultivo de tabaco y café.</p>
                <p>El sustrato de piedra caliza, visible en los cortes del cañón, tiene una edad estimada de 150 millones de años. Los procesos de erosión fluvial del río Chicamocha han esculpido uno de los cañones más profundos del continente, con paredes que descienden más de 2.000 metros desde el borde de la meseta.</p>
              </div>
            </div>
            <div className="reveal geo-stats">
              <div className="geo-stat"><span className="geo-stat__val">1.600</span><span className="geo-stat__label">Altitud (m.s.n.m.)</span></div>
              <div className="geo-stat"><span className="geo-stat__val">150</span><span className="geo-stat__label">Extensión (km²)</span></div>
              <div className="geo-stat"><span className="geo-stat__val">22°</span><span className="geo-stat__label">Temperatura media</span></div>
              <div className="geo-stat"><span className="geo-stat__val">1.200</span><span className="geo-stat__label">Precipitación (mm/año)</span></div>
              <div className="geo-stat"><span className="geo-stat__val">2 km</span><span className="geo-stat__label">Profundidad cañón</span></div>
              <div className="geo-stat"><span className="geo-stat__val">1748</span><span className="geo-stat__label">Año de fundación</span></div>
            </div>
          </div>
        </div>
      </section>

      <PhotoBreak src="/images/meseta.png" caption="La Meseta de los Santos vista desde el camino a Los Santos. Cultivos de café y tabaco se extienden hasta el borde del cañón." />

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Historia y Cultura</p>
          <div className="grid-asym grid-asym--reverse">
            <div className="reveal">
              <h2 className="section__heading">Piedra, tabaco y memoria</h2>
              <div className="section__text">
                <p>Los primeros habitantes conocidos de la meseta fueron los Guane, un pueblo de la familia lingüística chibcha que desarrolló una cultura agrícola sofisticada adaptada a las condiciones del terreno. Los vestigios arqueológicos incluyen petroglifos, terrazas de cultivo y caminos empedrados que conectaban la meseta con el valle del río Chicamocha.</p>
                <p>Tras la colonización española en el siglo XVI, la meseta se convirtió en zona de producción tabacalera. Las haciendas de tabaco definieron la economía y la arquitectura de la región durante tres siglos. Las casas de bahareque con techos de teja de barro, construidas con materiales locales (madera, guadua, tierra y cal), son el testimonio arquitectónico más visible de esta historia.</p>
                <p>En el siglo XX, el cultivo de café se sumó al tabaco como actividad económica principal. Hoy, la meseta mantiene una vocación agrícola que coexiste con un creciente interés por su patrimonio paisajístico y cultural.</p>
              </div>
            </div>
            <div className="reveal">
              <div className="pull-quote">
                “Las haciendas de tabaco y las casas de bahareque son el testimonio vivo de la memoria colonial de los Andes orientales.”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Naturaleza</p>
          <div className="grid-asym">
            <div className="reveal">
              <h2 className="section__heading">Ecosistemas de contraste</h2>
              <div className="section__text">
                <h3 className="subsection__title">Páramo y frailejones</h3>
                <p>En las zonas altas cercanas a la meseta, el ecosistema de páramo alberga frailejones (Espeletia), musgos de Sphagnum y una diversidad de plantas adaptadas a las condiciones de alta montaña. Este ecosistema es esencial como reserva de agua para la región.</p>
                
                <h3 className="subsection__title">El cañón árido</h3>
                <p>Las laderas del Cañón del Chicamocha presentan un ecosistema de bosque seco tropical, con cactáceas, arbustos xerófilos y una fauna adaptada a condiciones de aridez. El contraste entre la aridez del cañón y la humedad de la meseta es uno de los rasgos más notables del paisaje.</p>
              </div>
            </div>
            <div className="reveal">
              <figure className="inline-figure">
                <div className="inline-figure__image-wrap">
                  <img src="/images/paramo.png" alt="Paisaje de páramo y frailejones" loading="lazy" />
                </div>
                <figcaption>Ecosistema de páramo, vital como reserva de agua para la región.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


/* =========================================================
   VIEW 2: FORMALIZACIÓN (Nuevo Documental)
   ========================================================= */
function FormalizationView() {
  return (
    <div className="view-content fade-in">
      <section className="hero">
        <div className="hero__image-wrap">
          <img className="hero__image" src="/images/paramo.png" alt="Paisaje de la Mesa de los Santos" loading="eager" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <p className="hero__kicker">Desarrollo Sostenible</p>
          <h1 className="hero__title">La formalización<br />del turismo</h1>
          <p className="hero__subtitle">Desafíos y oportunidades para un crecimiento organizado en La Mesa de los Santos.</p>
        </div>
      </section>

      <section className="section intro">
        <div className="section__inner">
          <div className="grid-asym">
            <div className="reveal">
              <h2 className="section__heading">La Mesa de los Santos: un destino turístico en crecimiento</h2>
              <div className="section__text">
                <p className="intro__lead">La Mesa de los Santos es un altiplano ubicado en el departamento de Santander, Colombia, aproximadamente a una hora de Bucaramanga. Este territorio se ha convertido en uno de los destinos turísticos más importantes de la región gracias a sus paisajes naturales, el clima templado, las vistas hacia el Cañón del Chicamocha y su riqueza cultural y gastronómica.</p>
                <p>Durante los últimos años, la región ha experimentado un crecimiento acelerado del turismo rural, ecológico y de aventura. Actividades como el parapente, senderismo, hospedajes campestres, glampings y rutas cafeteras han atraído cada vez más visitantes nacionales e internacionales. Este crecimiento ha generado nuevas oportunidades económicas para la comunidad local, impulsando la creación de restaurantes, alojamientos turísticos y operadores de experiencias ecológicas.</p>
                <p>Sin embargo, el aumento del turismo también ha traído consigo importantes desafíos relacionados con la organización, regulación y sostenibilidad del sector turístico.</p>
              </div>
            </div>
            
            <div className="reveal flex-col-images">
              <figure className="inline-figure">
                <div className="inline-figure__image-wrap">
                  <a href="https://www.micolombiaquerida.com/mesa-de-los-santos" target="_blank" rel="noopener noreferrer">
                    <img src="/images/M1.jpg" alt="La Mesa de los Santos - Mi Colombia Querida" loading="lazy" />
                  </a>
                </div>
                <figcaption>Fuente: <a href="https://www.micolombiaquerida.com/mesa-de-los-santos" target="_blank" rel="noopener noreferrer">Mi Colombia Querida</a></figcaption>
              </figure>
              <figure className="inline-figure">
                <div className="inline-figure__image-wrap">
                  <a href="https://ponyparquehotel.com/noticia/planes-para-hacer-en-bucaramanga-y-la-mesa-de-los-santos/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/M2.jpg" alt="Planes en la Mesa de los Santos" loading="lazy" />
                  </a>
                </div>
                <figcaption>Fuente: <a href="https://ponyparquehotel.com/noticia/planes-para-hacer-en-bucaramanga-y-la-mesa-de-los-santos/" target="_blank" rel="noopener noreferrer">Pony Parque Hotel</a></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Conceptos Clave</p>
          
          <div className="grid-asym">
            <div className="reveal">
              <h2 className="section__heading">¿Qué es la formalización del turismo?</h2>
              <div className="section__text">
                <p>La formalización turística es el proceso mediante el cual los prestadores de servicios turísticos cumplen con los requisitos legales, comerciales, tributarios y de calidad exigidos por el Estado para operar oficialmente.</p>
                <p>La formalización no solo permite que los establecimientos funcionen legalmente, sino que también garantiza:</p>
                <ul className="editorial-list">
                  <li>Seguridad y confianza para los turistas.</li>
                  <li>Cumplimiento de normas ambientales.</li>
                  <li>Competencia justa entre empresarios.</li>
                  <li>Mayor calidad en los servicios ofrecidos.</li>
                  <li>Acceso a programas de apoyo gubernamental.</li>
                </ul>
                <p>En Colombia, este proceso es liderado principalmente por el Ministerio de Comercio, Industria y Turismo, junto con entidades como Confecámaras, FONTUR y las Cámaras de Comercio regionales.</p>
              </div>
            </div>

            <div className="reveal">
              <figure className="inline-figure" style={{ marginTop: 'var(--space-md)' }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/F1.jpg" alt="Procesos de formalización turística" loading="lazy" />
                </div>
                <figcaption style={{ margin: 0 }}>La formalización garantiza mayor calidad en los servicios y seguridad para el visitante.</figcaption>
              </figure>
            </div>
          </div>

          <div className="tables-grid reveal">
            <div className="editorial-table-wrap" style={{ margin: 0 }}>
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Mecanismos informales y riesgo legal (FTB)</h3>
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th>Mecanismo informal</th>
                    <th>Cómo funciona</th>
                    <th>Riesgo legal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Solo RUT (DIAN)</td>
                    <td>Facturan y reciben pagos. Sin registro mercantil ni RNT.</td>
                    <td>Alto</td>
                  </tr>
                  <tr>
                    <td>Permiso sanitario</td>
                    <td>Concepto de Salud Municipal para restaurantes/hospedajes.</td>
                    <td>Medio</td>
                  </tr>
                  <tr>
                    <td>Airbnb / Booking / Facebook</td>
                    <td>Publican y cobran sin RNT. Regulación en proceso desde 2024.</td>
                    <td>Alto</td>
                  </tr>
                  <tr>
                    <td>Juntas de acción comunal</td>
                    <td>Operan bajo la personería jurídica del colectivo comunitario.</td>
                    <td>Bajo</td>
                  </tr>
                  <tr>
                    <td>Voz a voz / WhatsApp</td>
                    <td>Captan clientes sin publicidad formal. Dependen de turismo repetitivo.</td>
                    <td>Alto</td>
                  </tr>
                  <tr>
                    <td>Empleo en efectivo</td>
                    <td>Contratan sin contrato, sin seguridad social, pagando por día o temporada.</td>
                    <td>Muy alto</td>
                  </tr>
                  <tr>
                    <td>Bajo perfil físico</td>
                    <td>No ponen rótulos ni publicidad para evitar inspecciones de la alcaldía o DIAN.</td>
                    <td>Medio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="editorial-table-wrap" style={{ margin: 0 }}>
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Normas aplicables – Descripción y aplicación (FTB3)</h3>
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th>Norma</th>
                    <th>Descripción y aplicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Código de Comercio Art. 10-28</td>
                    <td>Obligatoriedad del registro mercantil para todo comerciante. Sin registro, la empresa no tiene existencia legal.</td>
                  </tr>
                  <tr>
                    <td>Ley 300 de 1996 (Ley General de Turismo)</td>
                    <td>Establece el RNT obligatorio para todos los prestadores de servicios turísticos en Colombia.</td>
                  </tr>
                  <tr>
                    <td>Ley 1101 de 2006</td>
                    <td>Establece contribución parafiscal al turismo. Las empresas formales aportan al Fondo de Promoción Turística.</td>
                  </tr>
                  <tr>
                    <td>Decreto 2063 de 2016</td>
                    <td>Reglamenta el RNT: requisitos, categorías, renovación anual y cancelación por no renovar dos períodos consecutivos.</td>
                  </tr>
                  <tr>
                    <td>Ley 1819 de 2016 (Reforma Tributaria)</td>
                    <td>Regula el régimen tributario simplificado para microempresas. Facilita la formalización tributaria de pequeños negocios.</td>
                  </tr>
                  <tr>
                    <td>Decreto 410 de 1971 (Código de Comercio)</td>
                    <td>Define las actividades mercantiles. Todo establecimiento de comercio debe estar inscrito en el registro mercantil.</td>
                  </tr>
                  <tr>
                    <td>Resolución 2804 de 2014 MinCIT</td>
                    <td>Establece categorías de alojamiento rural y ecoturístico. Aplica directamente a fincas y glamping de la Mesa de los Santos.</td>
                  </tr>
                  <tr>
                    <td>NTS-TS 002 (ICONTEC)</td>
                    <td>Norma técnica sectorial para establecimientos de alojamiento. Define estándares de calidad para hoteles y posadas.</td>
                  </tr>
                  <tr>
                    <td>Ley 2069 de 2020 (Emprendimiento)</td>
                    <td>Simplificación de trámites para la creación de empresas. Reduce barreras de formalización para microempresarios.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <PhotoBreak src="/images/meseta.png" caption="El aumento del turismo ha generado nuevas dinámicas económicas en la región que exigen mayor organización." />

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Desafíos</p>
          
          <div className="grid-asym">
            <div className="reveal">
              <h2 className="section__heading">La problemática de la informalidad turística en la Mesa de los Santos</h2>
              <div className="section__text">
                <p>El rápido crecimiento del turismo en la Mesa de los Santos generó un aumento considerable de establecimientos y actividades turísticas que comenzaron a operar sin cumplir completamente los requisitos legales. Muchas fincas turísticas, viviendas vacacionales y actividades de aventura funcionan de manera informal, sin Registro Nacional de Turismo (RNT), pólizas de responsabilidad civil o protocolos de seguridad adecuados.</p>
                <p>Esta situación ha provocado diferentes problemáticas para la región:</p>
                <ul className="editorial-list">
                  <li>Competencia desleal entre prestadores formales e informales.</li>
                  <li>Riesgos de seguridad para los visitantes.</li>
                  <li>Dificultades para controlar el impacto ambiental.</li>
                  <li>Pérdida de confianza en algunos servicios turísticos.</li>
                  <li>Limitaciones para posicionar la región como un destino internacional sostenible.</li>
                </ul>
                <p>Además, algunas actividades de aventura son desarrolladas sin certificaciones técnicas ni personal capacitado, aumentando el riesgo de accidentes y afectando la imagen turística del territorio.</p>
              </div>
            </div>

            <div className="reveal flex-col-images">
              <figure className="inline-figure">
                <div className="inline-figure__image-wrap">
                  <img src="/images/LP1.jpg" alt="Turistas con camisetas de Mesa de los Santos" loading="lazy" />
                </div>
                <figcaption>Turistas con camisetas de Mesa de los Santos en pueblo colorido [Imagen generada por inteligencia artificial]. Canva. Generada el 16 de mayo de 2024</figcaption>
              </figure>

              <div className="editorial-table-wrap" style={{ margin: 0 }}>
                <h3 className="subsection__title" style={{ marginTop: 0 }}>Tipos de negocio – Estimado 2026 y registros obligatorios (LPTB1)</h3>
                <table className="editorial-table">
                  <thead>
                    <tr>
                      <th>Tipo de negocio</th>
                      <th>Estimado 2026</th>
                      <th>Registros obligatorios</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hoteles / alojamiento rural</td>
                      <td>~35</td>
                      <td>RNT + CCB + Bomberos + Sanidad</td>
                    </tr>
                    <tr>
                      <td>Restaurantes y cafeterías</td>
                      <td>~25</td>
                      <td>CCB + Sanidad + INVIMA</td>
                    </tr>
                    <tr>
                      <td>Operadores turismo aventura</td>
                      <td>~12</td>
                      <td>RNT + CCB + Póliza de seguro</td>
                    </tr>
                    <tr>
                      <td>Guías de turismo</td>
                      <td>~8</td>
                      <td>RNT individual + certificado SENA</td>
                    </tr>
                    <tr>
                      <td>Glamping y campamentos</td>
                      <td>~5</td>
                      <td>RNT + CCB</td>
                    </tr>
                    <tr>
                      <td>Agencias de viaje</td>
                      <td>~3</td>
                      <td>RNT + CCB + Póliza</td>
                    </tr>
                    <tr>
                      <td>Comercio / artesanías</td>
                      <td>~442</td>
                      <td>SOLO RUT (mayoría informal)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="dashboard-layout reveal">
            <div className="dato-destacado-box">
              <h3>Dato destacado — Sector hotelero y restaurantes</h3>
              <p>El 66.7% de los hoteles y restaurantes activos en Los Santos NO supera los 5 años de antigüedad (CCB 2023). Son negocios jóvenes, en pleno crecimiento, pero muchos aún sin todos sus registros al día. Este es el segmento con mayor potencial de formalización rápida.</p>
            </div>

            <div className="cifras-clave-header">
              <h2>CIFRAS CLAVE — AÑO 2026</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number"><span className="stat-icon">✔️</span>~530</div>
                <div className="stat-label">Empresas FORMALES activas (CCB)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number"><span className="stat-icon">❌</span>~450</div>
                <div className="stat-label">Negocios INFORMALES estimados</div>
              </div>
              <div className="stat-card">
                <div className="stat-number"><span className="stat-icon">📈</span>90.2%</div>
                <div className="stat-label">Tasa nacional de informalidad empresarial (DANE 2024)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number"><span className="stat-icon">🏢</span>96.4%</div>
                <div className="stat-label">Son microempresas en Santander (CCB 2025)</div>
              </div>
            </div>

            <div className="lists-grid">
              <div className="list-card">
                <h3 className="list-title">✔️ EMPRESAS FORMALES TIENEN:</h3>
                <ul>
                  <li>Matrícula mercantil vigente CCB.</li>
                  <li>RNT activo (Registro Nacional de Turismo).</li>
                  <li>RUT registrado ante la DIAN.</li>
                  <li>Concepto sanitario y permiso bomberos.</li>
                  <li>Empleados con contrato y seguridad social.</li>
                  <li>Acceso a crédito bancario formal.</li>
                </ul>
              </div>
              <div className="list-card">
                <h3 className="list-title">❌ NEGOCIOS INFORMALES SOLO TIENEN:</h3>
                <ul>
                  <li>RUT solamente (creen que es suficiente).</li>
                  <li>Perfil en redes sociales / Airbnb sin RNT.</li>
                  <li>Permiso sanitario municipal (parcial).</li>
                  <li>Acuerdos de palabra con empleados.</li>
                  <li>Sin acceso a crédito ni licitaciones.</li>
                  <li>Riesgo permanente de cierre o multa.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="chart-table-grid reveal" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="chart-wrapper">
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Evolución de Formalización vs Informalidad</h3>
              <FormalizacionChart />
            </div>

            <div className="editorial-table-wrap" style={{ margin: 0 }}>
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Tabla de datos completa 2018–2026 (LP4)</h3>
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th>Año</th>
                    <th>Formales (CCB)</th>
                    <th>Informales (est.)</th>
                    <th>% Formal</th>
                    <th>% Informal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>2018</td><td>310</td><td>480</td><td>38%</td><td>62%</td></tr>
                  <tr><td>2019</td><td>342</td><td>470</td><td>42%</td><td>58%</td></tr>
                  <tr><td>2020</td><td>298</td><td>510</td><td>37%</td><td>63%</td></tr>
                  <tr><td>2021</td><td>370</td><td>480</td><td>43%</td><td>57%</td></tr>
                  <tr><td>2022</td><td>430</td><td>460</td><td>48%</td><td>52%</td></tr>
                  <tr><td>2023</td><td>501</td><td>440</td><td>53%</td><td>47%</td></tr>
                  <tr><td>2024</td><td>507</td><td>435</td><td>54%</td><td>46%</td></tr>
                  <tr><td>2025</td><td>519</td><td>432</td><td>55%</td><td>45%</td></tr>
                  <tr><td>2026*</td><td>530</td><td>450</td><td>54%</td><td>46%</td></tr>
                </tbody>
              </table>
              <div className="chart-footnote" style={{ borderTop: 'none', textAlign: 'left', marginTop: 'var(--space-md)' }}>
                <p>Fuentes: CCB Dinámica Empresarial 2023 y 2025 (datos formales verificados). Informales estimados con base en DANE-EMICRON 2024 (tasa de informalidad 90.2%) y ANIF 2025. Datos 2025-2026 son proyecciones de tendencia. El pico de informalidad en 2020 refleja el cierre masivo de RNT por la pandemia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Regulación</p>
          
          <div className="split-layout-bordered reveal" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="section__text">
              <h2 className="section__heading" style={{ marginTop: 0 }}>El Registro Nacional de Turismo (RNT): el pilar de la formalización</h2>
              <p>El Registro Nacional de Turismo (RNT) es el principal requisito para que un prestador turístico opere legalmente en Colombia. Este registro permite identificar y supervisar a los establecimientos turísticos del país.</p>
              
              <h3 className="subsection__title">Características principales del RNT</h3>
              <ul className="editorial-list">
                <li>Es obligatorio para hoteles, glampings, hostales, fincas turísticas, agencias y guías.</li>
                <li>El trámite es gratuito y virtual.</li>
                <li>Debe renovarse cada año durante los primeros meses.</li>
                <li>Permite acceder a promoción turística y beneficios estatales.</li>
              </ul>

              <figure className="inline-figure" style={{ marginTop: 'var(--space-xl)', maxWidth: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/RNT1.jpg" alt="Documento de Registro Nacional de Turismo" loading="lazy" />
                </div>
                <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.75rem', color: 'var(--color-text-secondary)', opacity: 0.8 }}>
                  Fuente: <a href="https://www.turismoenmedellin.com/turismed/vp5441/sp/registro-nacional-operadora-turismo-en-medellin" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Turismo en Medellín</a>
                </div>
              </figure>
            </div>

            <div className="section__text">
              <h3 className="subsection__title" style={{ marginTop: 0, fontSize: 'var(--text-subtitle)', fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>Importancia del RNT</h3>
              
              <figure className="inline-figure" style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)', maxWidth: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/IPRNT1.jpg" alt="Registro Nacional de Turismo" loading="lazy" />
                </div>
              </figure>
              
              <p>Tener el RNT brinda confianza a los turistas, ya que demuestra que el establecimiento cumple con las normas básicas de funcionamiento y seguridad. Además, evita sanciones legales y facilita la participación en programas nacionales de promoción turística.</p>
              <p>Entre 2024 y 2026, la Gobernación de Santander y el Ministerio de Comercio fortalecieron campañas de formalización para incentivar a más empresarios turísticos a registrarse oficialmente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Sostenibilidad</p>
          
          <div className="split-layout-bordered reveal" style={{ marginTop: 'var(--space-xl)' }}>
            <div>
              <figure className="inline-figure" style={{ margin: 0 }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/TS1.jpg" alt="Turismo sostenible y protección ambiental" loading="lazy" />
                </div>
              </figure>
            </div>

            <div className="section__text">
              <h2 className="section__heading" style={{ marginTop: 0 }}>Turismo sostenible y protección ambiental</h2>
              <p>Uno de los principales retos de la Mesa de los Santos es garantizar que el crecimiento turístico no afecte negativamente los recursos naturales de la región.</p>
              <p>La Política Pública de Turismo de Santander 2024-2034 promueve un modelo de turismo sostenible enfocado en:</p>
              <ul className="editorial-list">
                <li>Protección de fuentes hídricas.</li>
                <li>Manejo adecuado de residuos sólidos.</li>
                <li>Conservación del paisaje natural.</li>
                <li>Uso responsable de los recursos ambientales.</li>
              </ul>
              <p>La escasez de agua en algunas zonas de la meseta ha convertido la gestión hídrica en una prioridad para las autoridades y empresarios turísticos. Por esta razón, muchos procesos de formalización exigen el cumplimiento de normas ambientales y sanitarias.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Fortalecimiento</p>
          
          {/* TOP HALF: Text + Video */}
          <div className="split-layout-bordered reveal" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="section__text">
              <h2 className="section__heading" style={{ marginTop: 0 }}>Capacitación y fortalecimiento del sector turístico</h2>
              <p>Con el apoyo del SENA y otras entidades regionales, se han implementado programas de capacitación dirigidos a:</p>
              <ul className="editorial-list">
                <li>Guías turísticos.</li>
                <li>Personal hotelero.</li>
                <li>Operadores de turismo de aventura.</li>
                <li>Emprendedores rurales.</li>
              </ul>
              <p>Estas capacitaciones buscan mejorar la calidad del servicio, fortalecer la atención al cliente y garantizar experiencias seguras y organizadas para los visitantes.</p>
              <p>La profesionalización del sector turístico también contribuye al crecimiento económico y al posicionamiento de la Mesa de los Santos como un destino competitivo.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="video-frame-beautiful">
                <iframe 
                  src="https://www.instagram.com/reel/DVxDLb3jLzu/embed" 
                  width="100%" 
                  height="520" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true"
                  title="Video de Instagram sobre fortalecimiento"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* BOTTOM HALF: Image + Table */}
          <div className="chart-table-grid reveal" style={{ marginTop: 'var(--space-lg)' }}>
            <div>
              <figure className="inline-figure" style={{ margin: 0 }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/CPF1.jpg" alt="Estrategias de formalización y capacitación" loading="lazy" />
                </div>
              </figure>
            </div>

            <div className="editorial-table-wrap" style={{ margin: 0 }}>
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Estrategias de formalización (CPFTB1)</h3>
              <table className="editorial-table">
                <thead>
                  <tr>
                    <th>Estrategia</th>
                    <th>Plazo</th>
                    <th>Cómo implementarla</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Brigadas móviles CCB</strong></td>
                    <td>Inmediato</td>
                    <td>La CCB ya tiene el programa Avanza Santander con oficinas móviles que llegan a Los Santos y Mesa de los Santos para tramitar registro mercantil gratis o con mínimo costo.</td>
                  </tr>
                  <tr>
                    <td><strong>2. Simplificación de RNT online</strong></td>
                    <td>Inmediato</td>
                    <td>El MinCIT permite inscripción del RNT 100% en línea. La alcaldía y la CCB deben hacer jornadas de capacitación en territorio.</td>
                  </tr>
                  <tr>
                    <td><strong>3. Incentivos tributarios</strong></td>
                    <td>Corto plazo</td>
                    <td>Exonerar contribución parafiscal al turismo los primeros 2 años para prestadores que se formalicen por primera vez en municipios como Los Santos.</td>
                  </tr>
                  <tr>
                    <td><strong>4. Acceso a crédito formal</strong></td>
                    <td>Corto plazo</td>
                    <td>Bancóldex, Finagro y Fondo Nacional de Garantías tienen líneas exclusivas para empresas con registro mercantil vigente. El registro se convierte en llave al financiamiento.</td>
                  </tr>
                  <tr>
                    <td><strong>5. Asociación de prestadores turísticos</strong></td>
                    <td>Mediano plazo</td>
                    <td>Crear una asociación local que gestione registros colectivos, comparta costos de contador y negocie tarifas de seguros. Un solo contador puede formalizar 20 negocios juntos.</td>
                  </tr>
                  <tr>
                    <td><strong>6. Educación financiera SENA</strong></td>
                    <td>Mediano plazo</td>
                    <td>El SENA Regional Santander ofrece programas gratuitos de emprendimiento y formalización. Deben dictarse en la Mesa de los Santos, no solo en Bucaramanga.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <p className="section__label reveal">Institucionalidad</p>
          <div className="reveal">
            <h2 className="section__heading" style={{ marginBottom: 'var(--space-2xl)', textAlign: 'left', maxWidth: '100%' }}>Acciones del gobierno y los gremios turísticos</h2>
          </div>

          {/* TOP HALF */}
          <div className="split-layout-bordered reveal">
            <div className="section__text">
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Plan Sectorial de Turismo 2022-2026</h3>
              <p>El gobierno nacional y regional desarrolla estrategias bajo el lema “Turismo en consonancia con la vida”, buscando fortalecer el turismo sostenible y disminuir las brechas de competitividad en regiones como Santander.</p>
              <p>En la Mesa de los Santos, estas estrategias se enfocan principalmente en:</p>
              <ul className="editorial-list">
                <li>Facilitar los procesos de formalización.</li>
                <li>Apoyar pequeños empresarios turísticos.</li>
                <li>Incentivar el turismo de naturaleza y café de origen.</li>
              </ul>
              <figure className="inline-figure" style={{ marginTop: 'var(--space-xl)' }}>
                <div className="inline-figure__image-wrap">
                  <img src="/images/AGTPT1.jpg" alt="Plan Sectorial de Turismo" loading="lazy" />
                </div>
              </figure>
            </div>

            <div className="section__text">
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Inversión en infraestructura turística</h3>
              <p>El Fondo Nacional de Turismo (FONTUR) ha financiado proyectos relacionados con:</p>
              <ul className="editorial-list">
                <li>Señalización turística.</li>
                <li>Construcción de puntos de información.</li>
                <li>Mejoramiento de espacios turísticos.</li>
              </ul>
              <p>Estas inversiones buscan mejorar la experiencia de los visitantes y fortalecer el desarrollo económico local.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'var(--space-xl)' }}>
                <div className="video-frame-beautiful">
                  <iframe 
                    src="https://www.instagram.com/reel/DK-FpaduTzR/embed" 
                    width="100%" 
                    height="520" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowTransparency="true"
                    title="Inversión en infraestructura"
                    style={{ display: 'block' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <hr className="rule" style={{ margin: 'var(--space-2xl) 0' }} />

          {/* BOTTOM HALF */}
          <div className="split-layout-bordered reveal">
            <div className="section__text" style={{ borderRight: 'none', paddingRight: '0' }}>
              <h3 className="subsection__title" style={{ marginTop: 0 }}>Promoción nacional e internacional</h3>
              <p>Santander participa en eventos turísticos como ANATO, donde se promocionan los atractivos turísticos de la Mesa de los Santos, especialmente:</p>
              <ul className="editorial-list">
                <li>Turismo ecológico.</li>
                <li>Turismo de aventura.</li>
                <li>Gastronomía regional.</li>
                <li>Café de origen.</li>
              </ul>
              <p>Los prestadores formalizados tienen mayores oportunidades de participar en estos espacios de promoción.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="video-frame-beautiful">
                <iframe 
                  src="https://www.instagram.com/reel/DVMuHHtCfyr/embed" 
                  width="100%" 
                  height="520" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true"
                  title="Promoción nacional e internacional"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <div className="split-layout-bordered reveal">
            <div className="section__text">
              <h2 className="section__heading" style={{ marginTop: 0 }}>Beneficios de la formalización turística</h2>
              <p>Formalizar un establecimiento turístico ofrece múltiples ventajas:</p>
              <ul className="editorial-list">
                <li>Acceso a promoción nacional e internacional.</li>
                <li>Participación en ferias y eventos turísticos.</li>
                <li>Mayor confianza por parte de los visitantes.</li>
                <li>Seguridad jurídica frente a inspecciones.</li>
                <li>Posibilidad de acceder a incentivos tributarios.</li>
                <li>Integración en programas de apoyo gubernamental.</li>
              </ul>
              <p>Además, la formalización contribuye al crecimiento económico organizado de la región y mejora la imagen turística del destino.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '1px solid var(--color-rule)', backgroundColor: '#000', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} 
                   onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.2)'; }}
                   onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}>
                <iframe 
                  src="https://www.youtube.com/embed/KR0oconeNII?start=5" 
                  title="Beneficios de la formalización turística" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  style={{ width: '100%', height: '100%', display: 'block' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="solutions-container reveal">
            <div className="solutions-header">
              <h3>SOLUCIONES: Del negocio informal a la empresa formal</h3>
            </div>
            
            <div className="solutions-grid">
              <div className="solutions-left">
                <div className="solution-item">
                  <div className="solution-number">1</div>
                  <div className="solution-content">
                    <h4>Brigadas móviles CCB en territorio</h4>
                    <span className="plazo">[ INMEDIATO ]</span>
                    <p>El programa Avanza Santander de la CCB ya llega a Los Santos y Mesa de los Santos con oficinas móviles. Trámite de registro mercantil con mínimo costo y asesoría gratuita en el municipio.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">2</div>
                  <div className="solution-content">
                    <h4>Jornadas de inscripción RNT en línea</h4>
                    <span className="plazo">[ INMEDIATO ]</span>
                    <p>El MinCIT permite inscribir el RNT 100% en línea y de forma gratuita en rnt.gov.co. Alcaldía y CCB deben hacer capacitaciones presenciales en la Mesa de los Santos para guiar el proceso.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">3</div>
                  <div className="solution-content">
                    <h4>Incentivos tributarios para nuevos formalizados</h4>
                    <span className="plazo">[ CORTO PLAZO ]</span>
                    <p>Exonerar la contribución parafiscal al turismo los primeros 2 años para prestadores que se formalicen por primera vez en municipios pequeños como Los Santos. Ya existe esta figura en la ley.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">4</div>
                  <div className="solution-content">
                    <h4>Acceso a crédito como premio a la formalidad</h4>
                    <span className="plazo">[ CORTO PLAZO ]</span>
                    <p>Bancóldex, Finagro y el Fondo Nacional de Garantías tienen líneas exclusivas para empresas con registro mercantil. El registro se convierte en la llave al financiamiento: el mayor incentivo real.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">5</div>
                  <div className="solution-content">
                    <h4>Asociación de prestadores turísticos local</h4>
                    <span className="plazo">[ MEDIANO PLAZO ]</span>
                    <p>Crear una asociación de prestadores en la Mesa de los Santos que gestione registros colectivos, comparta costos de contador y negocie seguros. Un solo contador puede formalizar 20 negocios juntos.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">6</div>
                  <div className="solution-content">
                    <h4>Educación financiera y empresarial SENA</h4>
                    <span className="plazo">[ MEDIANO PLAZO ]</span>
                    <p>El SENA Regional Santander tiene programas gratuitos de emprendimiento y formalización. Deben dictarse directamente en la Mesa de los Santos, no solo en Bucaramanga, para eliminar la barrera de distancia.</p>
                  </div>
                </div>

                <div className="solution-item">
                  <div className="solution-number">7</div>
                  <div className="solution-content">
                    <h4>Control inteligente: acompañar antes de sancionar</h4>
                    <span className="plazo">[ LARGO PLAZO ]</span>
                    <p>Período de gracia de 6 meses donde la alcaldía y la CCB acompañen la formalización antes de aplicar multas. La meta es registrar, no cerrar. Un negocio cerrado no genera empleo ni impuestos.</p>
                  </div>
                </div>
              </div>

              <div className="solutions-right">
                <div className="solution-item">
                  <div className="solution-number">8</div>
                  <div className="solution-content">
                    <h4>Plataformas digitales con RNT obligatorio</h4>
                    <span className="plazo">[ LARGO PLAZO ]</span>
                    <p>Exigir RNT activo para publicar en Airbnb, Booking y Facebook Marketplace. El MinCIT reglamentó esto en 2024. Su aplicación efectiva en Los Santos cerraría el mayor canal de informalidad turística digital.</p>
                  </div>
                </div>

                <div className="conclusion-box">
                  <h4>CONCLUSIÓN CLAVE</h4>
                  <p>La Mesa de los Santos tiene más empresas formales que informales por primera vez en 2022, pero el 90% de los micronegocios sigue siendo informal a nivel nacional. La clave es atacar <strong>SIMULTÁNEAMENTE</strong> la oferta de formalización (más fácil registrarse) y la demanda de informalidad (más costoso NO registrarse). Ninguna estrategia aislada es suficiente.</p>
                  <p className="conclusion-sources">Fuentes: CCB Bucaramanga · DANE-EMICRON · MinCIT · ANIF · Portafolio · Mayo 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <hr className="rule" />
          <div className="content-centered reveal">
            <h2 className="section__heading">Obstáculos y desafíos de la formalización</h2>
            <div className="section__text">
              <p>A pesar de los avances, todavía existen dificultades importantes para lograr una formalización completa del turismo en la región.</p>
              
              <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', justifyContent: 'center' }}>
                <figure style={{ margin: 0, width: '100%', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '1px solid var(--color-rule)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer' }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}>
                  <img src="/images/OBD1.jpg" alt="Obstáculos y desafíos de la formalización" style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.05)' }} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   VIEW 3: INFOGRAFÍA
   ========================================================= */
function InfografiaView() {
  return (
    <div className="view-content fade-in" style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
      <section className="section infografia-section">
        <div className="section__inner reveal">
          <hr className="rule" />
          <p className="section__label">Resumen Visual</p>
          <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', justifyContent: 'center' }}>
            <figure style={{ margin: '0 auto', width: '100%', maxWidth: '850px', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer', mixBlendMode: 'multiply' }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; }}>
              <img src="/images/Infografia.jpeg" alt="Infografía de la Mesa de los Santos" style={{ width: '100%', height: 'auto', display: 'block', imageRendering: 'high-quality' }} />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   VIEW 4: BIBLIOGRAFÍA Y QR
   ========================================================= */
function BibliographyView() {
  const entries = [
    {
      title: 'Plan de Desarrollo Departamental 2024 - 2027: "Santander Tierra de Oportunidades"',
      detail: 'Documento oficial que detalla las políticas de competitividad y formalización turística regional.',
      link: 'https://santander.gov.co/publicaciones/10108/plan-de-desarrollo-departamental-2024-2027/'
    },
    {
      title: 'Portal Oficial del Registro Nacional de Turismo (RNT)',
      detail: 'Inscripción, actualización y consulta de prestadores formales en todo el país.',
      link: 'https://rnt.confecamaras.co/home'
    },
    {
      title: 'Boletín de prensa sobre la apuesta del Gobierno Nacional por la sostenibilidad en destinos como el Cañón del Chicamocha y la Mesa de los Santos',
      link: 'https://www.mincit.gov.co/prensa/noticias/turismo/proyectos-apuestan-desarrollo-turistico-santander'
    },
    {
      title: 'Convocatorias y beneficios para residentes y prestadores de la Mesa de los Santos (Descuento Peaje La Punta)',
      link: 'https://santander.gov.co/publicaciones/9213/nueva-convocatoria-para-que-residentes-de-lamesa-de-los-santos-accedan-al-descuento-del-peaje-la-punta/'
    },
    {
      author: 'Ministerio de Comercio, Industria y Turismo',
      year: '2026',
      title: 'ABC de la Formalización Turística',
      detail: 'Documento que explica las sanciones y beneficios de la legalidad en el sector.',
      link: 'https://www.mincit.gov.co/prensa/noticias/turismo/mincit-invita-renovar-registro-nacional-de-turismo'
    },
    {
      title: 'Cámara de Comercio de Bucaramanga',
      detail: 'Guía y trámites para el Registro Nacional de Turismo (RNT) y Matrícula Mercantil. Información centralizada sobre cómo legalizar un negocio en Santander.',
      link: 'https://www.camaradirecta.com/preguntas-frecuentes'
    },
    {
      title: 'Obligaciones Legales de Restaurantes en Colombia',
      detail: 'Guía técnica sobre las leyes de sanidad y facturación vigentes para este año.',
      link: 'https://www.fintaxcol.com/permisos-y-obligaciones-legales-de-un-restaurante-en-colombia/'
    }
  ];

  return (
    <div className="view-content fade-in" style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
      <section className="section bibliography" id="bibliografia">
        <div className="section__inner reveal">
          <hr className="rule" />
          <p className="section__label">Bibliografía y Referencias</p>
          <h2 className="section__heading">Fuentes consultadas y acceso</h2>
          <div className="bib-layout">
            <div>
              <ol className="bib-list">
                {entries.map((entry, i) => (
                  <li className="bib-entry" key={i} style={{ marginBottom: '1.25rem' }}>
                    {entry.author && <span className="bib-entry__author">{entry.author}</span>}
                    {entry.year && <span className="bib-entry__year"> ({entry.year}).</span>}
                    {entry.title && <span className="bib-entry__title" style={{ fontWeight: '600' }}> {entry.title}.</span>}
                    {entry.detail && <span> {entry.detail}</span>}
                    {entry.link && (
                      <span style={{ display: 'block', marginTop: '6px' }}>
                        <a href={entry.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', wordBreak: 'break-word', color: 'var(--color-text)' }}>
                          {entry.link}
                        </a>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 'var(--space-xl)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderTop: '1px solid var(--color-rule)', paddingTop: 'var(--space-md)' }}>
                <p style={{ margin: '0 0 4px 0' }}><strong>Fuentes:</strong> Camara de Comercio de Bucaramanga | DANE-EMICRON | MinCIT | ANIF | Portafolio</p>
                <p style={{ margin: 0 }}>Mayo 2026</p>
              </div>
            </div>
            <div className="qr-block">
              <p className="qr-block__label">Compartir</p>
              <p className="qr-block__text">Escanea el código para acceder a este documento desde tu dispositivo.</p>
              <div className="qr-frame"><img src="/codigoQR.svg" alt="Código QR del documental" style={{ width: '180px', height: '180px', display: 'block' }} /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   MAIN APP ROUTER
   ========================================================= */
export default function App() {
  const { theme, toggle } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('information'); // 'information' | 'formalization' | 'infografia' | 'bibliography'

  useGlobalReveal([activeView]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="page">
      {/* Top Bar Controls */}
      <div className="top-controls">
        <button 
          className="menu-toggle" 
          onClick={toggleSidebar}
          aria-label="Abrir menú"
        >
          <MenuIcon />
        </button>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeView={activeView}
        setView={setActiveView}
      />

      <main>
        {activeView === 'information' && <InformationView />}
        {activeView === 'formalization' && <FormalizationView />}
        {activeView === 'infografia' && <InfografiaView />}
        {activeView === 'bibliography' && <BibliographyView />}
      </main>

      <footer className="footer">
        <p>Documento interactivo sobre La Mesa de los Santos, Santander, Colombia.</p>
      </footer>
    </div>
  );
}
