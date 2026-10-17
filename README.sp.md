[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla Excel de Control Financiero Semanal para B2B SaaS, Burn Rate y Variación de MRR (Analizador de NRR, GRR y BvA)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/42ffbf57-1f2d-4985-baf0-5556376a1749" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: SaaS FP&A & Variance Control](https://img.shields.io/badge/Tool-SaaS%20FP%26A%20%26%20Variance%20Control-0F766E)

**Un libro de trabajo de control financiero semanal para B2B SaaS, un rastreador del ritmo de quema de efectivo MTD y un analizador de variación en cascada de MRR/ARR. Diseñado para CEOs de SaaS respaldados por capital de riesgo, CFOs fraccionados y analistas de FP&A para auditar la Retención Neta de Ingresos (NRR), la Retención Bruta de Ingresos (GRR), la conversión del embudo de ventas de demo a cierre y los costos de nómina completamente cargados antes del cierre contable de fin de mes—disponible como simulador gratuito basado en navegador (sin registro) y como plantilla descargable de Microsoft Excel.**

> **Accede a las herramientas semanales de control de FP&A y variación para SaaS**
>
> - 🌐 **[Lanza el simulador gratuito basado en navegador de Burn y variación de MRR para SaaS](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)** — Explora el panel semanal de KPIs de SaaS, prueba las alertas de ritmo de quema de efectivo MTD e inspecciona la mecánica de la cascada de MRR en línea sin instalación ni registro.
> - 📥 **[Descarga el libro de trabajo semanal de control financiero para SaaS (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** — Obtén la plantilla completa de hoja de cálculo para revisiones financieras recurrentes de los lunes, conciliación de datos multsistema sin conexión (`QuickBooks`, `Stripe`, `Salesforce`, `Gusto`, `Deel`) y seguimiento formal del cierre de Presupuesto vs. Real (BvA) a fin de mes.
>



---

## Métricas centrales de B2B SaaS y puntos ciegos financieros previos al cierre que resuelve

Esperar de 15 a 20 días después del fin de mes a que los contables externos cierren el libro mayor es demasiado lento para la ejecución de B2B SaaS respaldadas por capital de riesgo. Este motor de apoyo a decisiones unifica las señales semanales de facturación, CRM y nómina en un libro operativo auditable. Así es como el modelo mapea los **puntos de dolor de la gestión financiera de SaaS** con **KPIs automatizados de FP&A y retención**:

| Punto de dolor del control financiero SaaS | Mecanismo semanal de devengo y variación | Métricas clave de SaaS y FP&A rastreadas |
| :--- | :--- | :--- |
| **Sobregiro del burn de efectivo a mitad de mes** | Compara el gasto devengado Mes hasta la Fecha (MTD) con el presupuesto mensual aprobado y el porcentaje de tiempo calendario transcurrido para señalar el gasto excesivo intra-mes. | Burn neto de efectivo MTD ($), objetivo mensual de burn (línea base de $150k), ritmo de burn vs. mes transcurrido (%), variación BvA en dólares/porcentaje |
| **Movimientos opacos de MRR y ARR de línea superior** | Descompone los ingresos recurrentes agregados en un puente de MRR de 4 partes para que los picos de expansión nunca enmascaren la rotación subyacente de clientes. | MRR de nuevos negocios, MRR de expansión, MRR de contracción (downgrade), MRR de churn, ARR neto nuevo |
| **Deterioro oculto de cohortes y logos de clientes** | Separa el crecimiento de ingresos impulsado por expansión de la erosión de la base central usando benchmarks institucionales de retención distintos. | Retención Bruta de Ingresos (`GRR %`), Retención Neta de Ingresos (`NRR %` vs. objetivo del 105%), churn mensual de logos de clientes (`%` vs. techo del 2%) |
| **Embudo de CRM desconectado de los pronósticos de ingresos** | Vincula la actividad de demos de la parte superior del embudo con el ARR cerrado-ganado para precisar si los fallos de ingresos provienen del volumen de leads o de la ejecución de ventas. | Demos agendadas, demos completadas, deals cerrados-ganados, tasa de conversión demo-a-cierre (`%` vs. benchmark del 20%), variación de pronóstico |
| **Costos de plantilla completamente cargados sin asignar** | Consolida la nómina nacional y de contratistas EOR junto con impuestos patronales y beneficios por departamento (`R&D`, `S&M`, `G&A`). | Costo de personal completamente cargado por departamento, proporción de salario base vs. carga de impuestos/beneficios patronales |
| **Variaciones entre sistemas sin responsable y fuga de OpEx** | Enruta las discrepancias materiales entre sistemas (umbral `>5%`) a un libro de excepciones y reducción de costos con responsables. | Marcas de conciliación entre sistemas, propietarios de acciones asignados, ahorros mensuales proyectados de OpEx ($), estado de implementación |

---

## Tutorial paso a paso: cómo ejecutar una auditoría semanal de finanzas y KPIs de SaaS

El libro de trabajo establece un **cadencia operativa semanal de FP&A los lunes**: configura tus benchmarks de SaaS aprobados por el consejo una vez, incorpora exportaciones CSV semanales de tu pila de facturación/CRM/RRHH, resuelve las excepciones señaladas y concilia con los reales formales del cierre mensual.

### Paso 1: Configurar benchmarks de SaaS, objetivos de burn y umbrales de variación
Abre la pestaña `Settings & Benchmarks` para establecer tu gobernanza de informes y umbrales de alerta:

- **Controles de reportes y liquidez:** Define la fecha de corte de reportes semanales, la moneda base, el objetivo mensual aprobado de burn neto (predeterminado de referencia: `$150,000/month`) y el umbral de materialidad de variación (predeterminado de referencia: `5%`).
- **Objetivos institucionales de KPIs de SaaS:** Establece tu benchmark objetivo de **Retención Neta de Ingresos (NRR)** (predeterminado: `105%`), el techo máximo de **Churn mensual de logos** (predeterminado: `2.0%`) y el objetivo de **Conversión demo-a-cierre** (predeterminado: `20%`).

*(Nota: Las configuraciones de referencia son valores operativos ilustrativos. Reemplázalos con los objetivos de tu plan operativo anual [AOP] aprobado por el consejo.)*

### Paso 2: Importar instantáneas semanales de facturación, contabilidad, CRM y nómina
Exporta tablas CSV/XLSX puntuales desde tu stack actual de B2B SaaS y pégalas en las hojas de entrada estandarizadas (conservando las marcas de tiempo de extracción y las fechas de corte):

- **Contabilidad y facturación de suscripciones (`QuickBooks` + `Stripe`):** Instantáneas de gastos del libro mayor, ciclos de facturas y registros de movimiento de MRR de suscripciones.
- **CRM y gestión de contratos (`Salesforce` + `PandaDoc`):** Demos de ventas agendadas/completadas, pronósticos de pipeline y valores de contratos ejecutados.
- **HRIS y nómina global (`Gusto` + `Deel`):** Listas de personal por departamento, salarios base, impuestos de nómina patronales, beneficios y facturas de contratistas EOR internacionales.

### Paso 3: Auditar el panel ejecutivo semanal y la cola de excepciones
Navega a las vistas `Executive Dashboard` y `KPI Variance` para inspeccionar la salud operativa antes de los standups de liderazgo de los lunes:

1. **Verificación del ritmo de burn MTD:** Verifica si el gasto mensual acumulado supera el tiempo calendario transcurrido (p. ej., 60% del presupuesto quemado con 45% del mes transcurrido).
2. **Auditoría de cascada de MRR y retención:** Inspecciona el MRR nuevo, de expansión, de contracción y de churn junto con `GRR` y `NRR` para verificar la adherencia del producto central.
3. **Enrutamiento de excepciones y acciones de costos:** Investiga cualquier discrepancia entre sistemas que exceda tu umbral de variación de `5%` antes de considerar los números listos para decisiones, y asigna propietarios de departamento a iniciativas documentadas de reducción de OpEx.

### Paso 4: Conciliar con los reales cerrados de fin de mes y operacionalizar en Excel
Ejecuta los pasos 2–3 cada semana. Una vez que tu firma contable externa o controlador interno publique el **cierre formal mensual o trimestral GAAP/IFRS**, ingresa las cifras cerradas en la pestaña `Reconciliation Workflow` para medir la precisión de las estimaciones y ajustar los supuestos semanales de devengo futuros.

> 📊 **¿Listo para eliminar el punto ciego de 20 días de fin de mes en tus operaciones SaaS?** 
> Después de explorar el diseño de KPIs en el **[Simulador gratuito basado en navegador de control financiero SaaS](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)**, descarga el **[Libro de trabajo reutilizable semanal de finanzas y variación SaaS (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** para conectar tus exportaciones en vivo de Stripe, QuickBooks, Salesforce y Gusto/Deel, rastrear a los responsables de ahorro de costos y mantener un registro semanal auditable para el consejo.

---

## Por qué construí este marco de control financiero semanal para SaaS

Una startup de B2B SaaS respaldada por capital de riesgo puede recibir estados financieros mensuales limpios verificados por un CPA y aun así tomar decisiones operativas semanales catastróficas.

La causa raíz es la **latencia de información**: los contables externos y equipos contables suelen cerrar los libros de 15 a 25 días después del fin de mes, mientras que un CEO de SaaS y su equipo ejecutivo asumen compromisos de contratación, marketing y proveedores cada lunes. Un saldo bancario crudo ignora los pasivos devengados; un gráfico de ingresos de Stripe ignora el burn de efectivo de QuickBooks; y un informe de pipeline de Salesforce ignora el churn.

### 1. La trampa intra-mes de "45% del tiempo transcurrido vs. 60% quemado"
Considera una empresa SaaS Serie A operando con un **objetivo mensual aprobado de burn neto de $150,000**.

El día 14 del mes (**45% del mes transcurrido**), el gasto MTD se sitúa en **$90,000**. Visto como una cifra aislada en dólares, $90,000 sigue estando $60,000 por debajo del tope mensual—por lo que un rastreador ingenuo muestra verde. En realidad, la empresa ya ha consumido **el 60% de su asignación mensual de burn** con más de la mitad del mes restante. Al señalar el **ritmo de burn relativo al tiempo transcurrido**, el liderazgo puede congelar el gasto discrecional en nube/marketing o pausar requisiciones no críticas *a mitad de mes*, en lugar de descubrir un sobregiro presupuestario de $40,000 tres semanas después del cierre del mes.

### 2. La trampa del "crecimiento neto de MRR" que enmascara un churn bruto alto
El mismo fallo de visibilidad ocurre en los ingresos recurrentes. El MRR titular podría crecer $15,000 en una semana porque dos cuentas enterprise mejoraron (`Expansion MRR`), ocultando el hecho de que diez clientes de mercado medio cancelaron (`Logo Churn` y `Contraction MRR`). Confiar solo en el ARR neto nuevo enmascara la erosión del product-market fit hasta que la expansión inevitablemente se ralentiza.

Construí este analizador como un **flujo de trabajo de razonamiento FP&A productizado**—conectando la ingesta de datos multsistema, la validación estadística, la descomposición en cascada de MRR, la rendición de cuentas de acciones de costos y la conciliación contable post-cierre en un modelo repetible.

---

## Cierre contable mensual vs. motor de control financiero semanal para SaaS

| Dimensión de finanzas y operaciones SaaS | Esperar el cierre contable de fin de mes y paneles aislados | Control financiero semanal y analizador de variación SaaS (esta herramienta) |
| :--- | :--- | :--- |
| **Latencia de visibilidad financiera** | El liderazgo espera 2–3 semanas después del fin de mes para obtener estados formales antes de detectar picos de OpEx o erosión del runway. | Las estimaciones operativas semanales basadas en devengo revelan señales de riesgo tempranas, respaldadas por la conciliación de fin de mes contra los reales cerrados. |
| **Control del ritmo del burn rate de efectivo** | El gasto MTD se ve como una suma fija en dólares sin medir la velocidad de consumo contra los días calendario transcurridos. | Compara el **burn neto MTD tanto contra el objetivo presupuestario de $150k como contra el % del mes transcurrido** para detectar sobregiros de ritmo a mitad de mes. |
| **Atribución de ingresos recurrentes (MRR/ARR)** | Los paneles de ingresos de línea superior mezclan ventas nuevas y upsells con downgrades, enmascarando el deterioro subyacente de cohortes. | Divide los ingresos recurrentes en una **cascada de MRR estricta: MRR de nuevos negocios, expansión, contracción y churn**. |
| **Calidad de retención y churn de clientes** | El crecimiento neto de ingresos se confunde con salud del cliente, pasando por alto el alto churn de logos entre cohortes centrales. | Rastrea la **Retención Bruta de Ingresos (GRR), la Retención Neta de Ingresos (NRR vs. 105%) y el churn de logos (vs. techo del 2%)** lado a lado. |
| **Auditoría del embudo de ventas y conversión de demos** | Demos agendadas, demos completadas, contratos PandaDoc firmados y pronósticos de ingresos residen en vistas de CRM desconectadas. | Conecta **demos agendadas $\rightarrow$ demos completadas $\rightarrow$ deals cerrados-ganados** para auditar el benchmark de conversión demo-a-cierre del `20%`. |
| **Responsabilidad de variaciones entre sistemas y OpEx** | Las discrepancias entre Stripe, QuickBooks y Gusto/Deel quedan sin explicación, y las promesas de recorte de costos carecen de seguimiento. | Aplica un **flujo de trabajo de excepciones de variación del 5%** y asigna a cada acción de reducción de costos un responsable, objetivo en dólares y estado. |

---

## Para quién está diseñado este libro de trabajo de SaaS FP&A: roles y flujos de trabajo

Este kit de herramientas de control financiero de formato dual (navegador + Excel) está diseñado para operadores de B2B SaaS y profesionales de finanzas que gestionan datos operativos distribuidos:

- **CEOs, fundadores y COOs de SaaS respaldados por capital de riesgo (Seed a Serie B):** Establezcan una única fuente de verdad para las reuniones de liderazgo de los lunes. Usen el **panel ejecutivo semanal de SaaS** para monitorear el ritmo de burn de efectivo, la salud de NRR/GRR y la velocidad del embudo de ventas semanas antes de que su contador externo entregue los estados financieros de fin de mes.
- **CFOs fraccionados, jefes de finanzas y analistas de SaaS FP&A:** Estandaricen los reportes semanales multcliente o internos sin pagar más de $30,000/año por software de FP&A empresarial. Usen la **plantilla Excel de variación de presupuesto vs. real (BvA) para SaaS** para conciliar estimaciones operativas semanales contra reales contables cerrados GAAP/IFRS.
- **VP de Ventas, líderes de RevOps y Customer Success:** Alineen la ejecución GTM con los objetivos financieros. Usen el **rastreador de puente de MRR y conversión de embudo** para separar el deslizamiento de demos en la parte superior del embudo (`Booked vs. Completed Demos`) de los problemas de retención aguas abajo (`Contraction vs. Logo Churn`).
- **Propietarios de presupuestos de ingeniería, producto y departamentos:** Obtengan visibilidad clara de los **costos de plantilla completamente cargados** (combinando nómina nacional y contratistas EOR internacionales) y rastreen las iniciativas asignadas de reducción de OpEx desde la propuesta hasta los ahorros mensuales realizados.
- **Inversores SaaS, socios operativos y asesores del consejo:** Desplieguen una **plantilla de reporte de portafolio** ligera y repetible entre empresas de portafolio en etapa temprana para inculcar disciplina financiera y auditar los supuestos de runway de efectivo.

---

## Casos de uso de la industria y escenarios SaaS de cola larga

Ya sea que operes una empresa de software de crecimiento liderado por producto (PLG) o una plataforma B2B SaaS empresarial liderada por ventas, este libro de trabajo resuelve desafíos de reportes multsistema de alta fricción:

### 1. Conciliar el stack moderno de B2B SaaS (QuickBooks + Stripe + Salesforce + PandaDoc + Gusto + Deel)
Las empresas SaaS en etapa temprana rara vez operan sobre un único ERP monolítico. La facturación vive en **Stripe**, la contabilidad en **QuickBooks**, el pipeline en **Salesforce**, los formularios de pedido firmados en **PandaDoc**, la nómina de EE. UU. corre en **Gusto** y los contratistas globales pasan por **Deel**. Este libro de trabajo proporciona tablas de ingesta estandarizadas para unir estos seis flujos de datos exactos en una vista semanal coherente de P&L y KPIs—señalando registros no mapeados o discrepancias entre sistemas (`>5%`) antes de que corrompan las decisiones ejecutivas.

### 2. Preservación de efectivo a mitad de mes y seguimiento de reducción de OpEx
Durante iniciativas de extensión de runway o reducciones de burn ordenadas por el consejo, recortar gastos en papel es fácil—realizarlos en flujo de efectivo es difícil. El **Libro de acciones de reducción de costos** integrado obliga a cada ahorro propuesto (p. ej., ajuste de infraestructura en la nube, consolidación de licencias SaaS, aplazamiento de contrataciones) a llevar un propietario de departamento nombrado, un impacto mensual estimado en dólares y un estado de ejecución (`Proposed`, `In Progress`, `Realized`).

### 3. Vincular estimaciones flash semanales con cierres contables externos de fin de mes
La mayoría de las startups Seed y Serie A dependen de firmas de teneduría de libros externas que cierran los libros con un retraso de 15 a 30 días. Al emparejar las **estimaciones operativas flash semanales** con un **flujo de trabajo de conciliación post-cierre de reales**, los equipos de finanzas pueden medir dónde se desviaron los devengos semanales de los estados contables formales—mejorando continuamente la precisión de las estimaciones con el tiempo.

---

### Alcance operativo y descargo de responsabilidad de gobernanza
*Esta herramienta es un modelo semanal de apoyo a decisiones operativas y analizador de variaciones de FP&A—no un libro mayor (GL) estatutario, ni un pipeline ETL automatizado, ni un motor de reconocimiento de ingresos GAAP/IFRS, ni un reemplazo de ERP empresarial. Se basa en instantáneas periódicas CSV/hojas de cálculo exportadas de los sistemas fuente y requiere que los usuarios verifiquen los mapeos de campos, las marcas de tiempo de corte y los supuestos de devengo. Los indicadores calculados deben pasar la revisión de excepciones antes de impulsar compromisos financieros vinculantes.*

---

## Acerca del creador

Construyo herramientas operativas ligeras e inspeccionables de apoyo a decisiones para flujos de trabajo empresariales de alto riesgo donde las señales críticas quedan enterradas entre plataformas SaaS y hojas de cálculo desconectadas. La pregunta central de ingeniería es simple: **¿qué métricas financieras, de ingresos y operativas exactas deben estar en un solo lugar el lunes por la mañana para tomar la próxima decisión de gestión con confianza?**

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

### Arquitectura del libro de trabajo

El libro de trabajo sigue un flujo de datos controlado:

**Configuración → Entradas estandarizadas → Cálculo y conciliación → Análisis de KPIs → Panel ejecutivo y acciones correctivas → Calibración con reales cerrados.**

El diseño de referencia contiene siete hojas de cálculo.

| Hoja de cálculo | Responsabilidad | Salidas principales |
|---|---|---|
| `01_Executive_Dashboard` | Vista de decisión ejecutiva | Estado de burn, ARR, MRR, retención, preparación de datos, excepciones materiales y acciones de costos |
| `02_Settings_Params` | Configuración central | Fecha de reportes, moneda, objetivo de burn, umbral de variación, benchmarks de rendimiento y diccionarios de dimensiones |
| `03_Weekly_Data_Input` | Ingesta de datos fuente | Cuatro tablas de entrada estandarizadas para finanzas, movimientos de MRR, actividad de ventas y plantilla |
| `04_Calculation_Engine` | Cálculo y conciliación | Burn, MRR, ARR, retención, métricas de embudo, compensación departamental y marcas de excepciones |
| `05_KPI_Analysis` | Análisis operativo | Cinco vistas analíticas que cubren finanzas, ingresos recurrentes, retención, ventas y costos de personal |
| `06_Exceptions_CostActions` | Gobernanza de excepciones | Explicaciones de variaciones, estado de revisión, propietarios de reducción de costos, ahorros esperados y estado de acciones |
| `07_Estimate_vs_Actual` | Calibración post-cierre | Ingresos, gastos y burn neto estimados vs. cerrados, y precisión histórica de estimaciones |

#### Tablas de entrada

Las cuatro tablas de entrada principales son:

- `Table_Inp_Finance`: `Report_Week_Ending`, `Source_System_Name`, `Batch_Timestamp`, `GL_Category`, `Accrual_Rev_Est` y `Accrual_Exp_Est`.
- `Table_Inp_Waterfall`: `Customer_ID`, `Contract_Start_Date`, `Starting_MRR`, `New_MRR_Amount`, `Expansion_MRR_Amount`, `Contraction_MRR_Amount` y `Churn_MRR_Amount`, junto con metadatos de período de reportes y fuente.
- `Table_Inp_Sales`: `Demos_Booked_Count`, `Demos_Held_Count`, `Closed_Won_Count` y `Forecast_Pipeline_Val`, junto con metadatos de período de reportes y fuente.
- `Table_Inp_Headcount`: `Employee_ID`, `Department_Name`, `Hire_Date`, `Termination_Date`, `Base_Salary_Paid` y `Taxes_Benefits_Paid`, junto con metadatos de período de reportes y fuente.

El diseño también hace referencia a `Table_Exceptions_Log`, `Table_Cost_Actions` y una tabla de conciliación llamada `Table_Reconcile`.

Se usan Tablas de Excel para que los registros recién agregados puedan incluirse en cálculos de referencias estructuradas sin copiar fórmulas manualmente hacia abajo en cada columna.

#### Flujo de datos y fronteras de control

| Etapa | Entrada o dependencia | Control requerido |
|---|---|---|
| Configuración | Fecha de reportes, moneda, objetivos, umbrales | Parámetros centralizados y valores de dimensiones validados |
| Ingesta de datos | Exportaciones periódicas de los sistemas fuente | Identidad de la fuente, marca de tiempo de extracción, corte de reportes consistente |
| Cálculo | Tablas estandarizadas y parámetros nombrados | Alineación de períodos, comprobaciones aritméticas, razones protegidas, conciliación entre fuentes |
| Análisis | Métricas operativas calculadas | Comparaciones real-vs-objetivo y marcas de excepción explícitas |
| Gestión de acciones | Excepciones y decisiones de gestión | Explicaciones escritas, propietarios nombrados, ahorros estimados, estado de ejecución |
| Calibración | Resultados financieros cerrados oficiales | Comparación alineada con períodos contra estimaciones previas y ajustes documentados |

El panel ejecutivo es una capa de presentación, no una superficie de entrada. El motor de cálculo está destinado a estar protegido y oculto durante el uso rutinario. La configuración, la entrada cruda, la salida analítica y las acciones de gestión permanecen separadas para que un revisor pueda distinguir qué se importó, qué se calculó y qué se decidió.

### Tres trampas que atrapan incluso a equipos de finanzas SaaS experimentados

#### Trampa 1: Tratar el burn del mes en curso como un número estático

**Decisión:** Continuar gastando al ritmo actual porque el burn MTD sigue por debajo del límite mensual.

**Suposición errónea:** Estar por debajo del presupuesto mensual significa que el gasto está bajo control.

Supongamos que el objetivo mensual de burn neto es $150,000. Con el 45% del mes transcurrido, el burn neto estimado ya alcanzó $90,000.

| Medida | Valor |
|---|---:|
| Objetivo mensual de burn | $150,000 |
| Progreso del mes transcurrido | 45% |
| Burn neto estimado MTD | $90,000 |
| Presupuesto consumido | 60% |
| Progreso de burn menos progreso de tiempo | +15 puntos porcentuales |

La estimación ha consumido el 60% de la asignación mensual mientras solo ha transcurrido el 45% del mes.

El error es confundir el **presupuesto restante** con la **trayectoria de gasto**. La empresa no necesariamente ha incumplido su objetivo mensual, pero está consumiendo la asignación más rápido de lo que avanza el calendario.

**Enfoque corregido:** Revisar tanto la variación presupuestaria absoluta como el progreso del burn relativo al progreso del mes transcurrido. Investigar gastos inusuales, compromisos de contratación, uso de infraestructura y otros cambios materiales de gasto antes de decidir si intervenir.

<details>
<summary>Referencia de fórmulas: trayectoria de burn y variación presupuestaria</summary>

```excel
=MTD_Cumulative_Burn / Param_Burn_Target
```

```excel
=MTD_Cumulative_Burn - Param_Burn_Target
```

```excel
=(MTD_Cumulative_Burn / Param_Burn_Target)
 - Param_Month_Progress_Pct
```

Interpretación:

- Una variación presupuestaria positiva indica un burn superior al objetivo.
- Una variación de trayectoria positiva indica que la proporción de presupuesto consumida excede la proporción configurada de mes transcurrido.
- La comparación de trayectoria es una señal de alerta temprana, no un pronóstico de efectivo completo. Asume que el porcentaje de progreso configurado es una base de comparación razonable.

</details>

#### Trampa 2: Confundir el crecimiento de MRR con una retención saludable

**Decisión:** Reportar una salud sólida del cliente porque el MRR final es mayor que el MRR inicial.

**Suposición errónea:** El crecimiento neto de ingresos recurrentes significa que la base de clientes existente es estable.

Considera un período de reportes ilustrativo con los siguientes movimientos:

| Componente de MRR | Monto |
|---|---:|
| MRR inicial | $100,000 |
| MRR nuevo | $12,000 |
| MRR de expansión | $8,000 |
| MRR de contracción | $5,000 |
| MRR de churn | $10,000 |
| MRR final | $105,000 |

El MRR final aumenta $5,000, o 5%. Eso parece positivo visto de forma aislada.

Sin embargo, la contracción y el churn juntos eliminan $15,000 de la base inicial. La retención bruta de ingresos resultante es 85%, mientras que la retención neta de ingresos es 93% bajo los supuestos de movimiento anteriores.

La distinción importa porque la adquisición de nuevos clientes puede compensar las pérdidas sin reparar el problema subyacente de retención.

**Enfoque corregido:** Examinar GRR y NRR junto con la cascada de MRR. GRR aísla la contracción y el churn en la base inicial de clientes. NRR además contabiliza la expansión dentro de esa base. El MRR nuevo debe reportarse por separado en lugar de usarse para disfrazar el deterioro de la retención.

<details>
<summary>Referencia de fórmulas: cascada de MRR y retención</summary>

```excel
Ending_MRR =
    Starting_MRR
    + New_MRR_Amount
    + Expansion_MRR_Amount
    - Contraction_MRR_Amount
    - Churn_MRR_Amount
```

```excel
GRR =
    (Starting_MRR - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

```excel
NRR =
    (Starting_MRR + Expansion_MRR_Amount
     - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

Para el ejemplo ilustrativo:

- GRR = ($100,000 − $5,000 − $10,000) / $100,000 = 85%.
- NRR = ($100,000 + $8,000 − $5,000 − $10,000) / $100,000 = 93%.

Estas son ilustraciones simplificadas a nivel de período. La implementación debe definir cohortes de clientes consistentes, tiempos de movimiento y períodos de reportes antes de que estas tasas se usen para reportes formales de rendimiento.

</details>

#### Trampa 3: Tratar una discrepancia entre sistemas como una diferencia de reporte inofensiva

**Decisión:** Aceptar una cifra de ingresos reportada porque parece plausible y el panel calcula sin errores.

**Suposición errónea:** Un cálculo exitoso prueba que los datos de origen coinciden.

Supongamos que el sistema de facturación reporta $100,000 mientras la estimación contable reporta $94,000 para la misma base de comparación. La diferencia es $6,000, equivalente aproximadamente al 6.38% del monto de comparación de $94,000.

Esa discrepancia excede un umbral del 5%. Puede reflejar tiempos, reembolsos, clasificación, importaciones incompletas, registros duplicados o un mapeo incorrecto. El porcentaje por sí solo no establece la causa.

**Enfoque corregido:** Confirmar que ambas cifras cubren el mismo período de reportes, moneda, población de transacciones y base contable. Luego documentar la explicación, revisar el resultado y escalar las diferencias no resueltas antes de que las cifras se usen para decisiones de gestión.

<details>
<summary>Referencia de fórmulas: variación entre fuentes</summary>

```excel
=IFERROR(
    ABS([@Primary_Amount]-[@Crosscheck_Amount])
    / ABS([@Crosscheck_Amount]),
    0
)
```

```excel
=IF(
    [@Variance_Pct] > Param_Variance_Threshold,
    "FLAGGED",
    "PASS"
)
```

El denominador de comparación debe definirse de manera consistente. Si el monto de verificación cruzada es cero o falta, el resultado no debería convertirse silenciosamente en una variación cero verificada. Las implementaciones de producción deberían distinguir los casos de denominador cero y referencia faltante de un pase genuino.

</details>

### Escenario de ejemplo

El siguiente ejemplo resuelto ilustra cómo una revisión de gestión semanal puede combinar las métricas de referencia. Las cifras son ilustrativas, no resultados de una empresa.

Supongamos que una empresa B2B SaaS que atiende a agencias de seguros tiene un objetivo mensual de burn neto de $150,000. En el corte de reportes, el libro de trabajo muestra:

| Indicador | Resultado ilustrativo | Interpretación inicial |
|---|---:|---|
| Burn neto del mes en curso | $90,000 | 60% del objetivo mensual consumido |
| Progreso del mes transcurrido | 45% | El burn va por delante del tiempo transcurrido |
| MRR inicial | $100,000 | Base recurrente de referencia |
| MRR nuevo | $12,000 | Contribución de clientes nuevos |
| MRR de expansión | $8,000 | Crecimiento de clientes existentes |
| MRR de contracción | $5,000 | Pérdida relacionada con downgrade |
| MRR de churn | $10,000 | Ingresos recurrentes perdidos |
| MRR final | $105,000 | Aumento neto de $5,000 |
| GRR | 85% | Contracción y churn significativos |
| NRR | 93% | Los ingresos de clientes existentes declinaron netos de expansión |
| Demos agendadas | 100 | Volumen de entrada del embudo |
| Demos realizadas | 70 | Tasa de realización del 70% |
| Clientes cerrados-ganados | 14 | Tasa de realización-a-cierre del 20% |

La primera pregunta de gestión es si la trayectoria de burn actual es consistente con el plan de gasto aprobado. La segunda es si el aumento de MRR está respaldado por una retención saludable o depende en gran medida de nuevos negocios. La tercera es si el embudo de ventas convierte suficientes demostraciones completadas en clientes para respaldar el crecimiento futuro.

Estas métricas no establecen automáticamente una causa. Identifican dónde debe investigar la gestión. El analista debe validar las instantáneas fuente, verificar discrepancias materiales y determinar si los cambios observados reflejan tiempos, desempeño operativo o problemas de calidad de datos.

La decisión resultante puede implicar una revisión de gasto específica, una investigación de retención de clientes, una revisión de conversión de ventas o una combinación de estas acciones. Cada problema material debe tener un propietario y un seguimiento documentado en lugar de terminar en una observación de panel.

### Referencia de fórmulas

Las fórmulas siguientes representan los cálculos principales en el diseño de referencia. Asumen que los parámetros nombrados y las tablas estructuradas han sido creados, que el período de reportes es consistente y que los datos fuente han pasado las comprobaciones relevantes.

<details>
<summary>Cálculos financieros: burn neto semanal y del mes en curso</summary>

**Propósito:** Estimar la posición de burn operativo antes del cierre contable formal.

Burn neto del período de reportes actual:

```excel
=LET(
    current_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp-current_rev
)
```

Burn neto del mes en curso:

```excel
=LET(
    month_start,
        EOMONTH(Param_Report_Date,-1)+1,
    mtd_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp-mtd_rev
)
```

**Nota de implementación:** La expresión del mes en curso asume que cada monto de período de reportes incluido representa un monto aditivo para ese período. Si las exportaciones fuente contienen instantáneas acumulativas, deben transformarse o deduplicarse antes de agregarse para evitar el doble conteo.

</details>

<details>
<summary>Ingresos recurrentes: MRR final y ARR</summary>

**Propósito:** Conciliar los movimientos de ingresos recurrentes y derivar un indicador de run-rate anualizado.

```excel
=LET(
    start_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Starting_MRR],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    new_mrr,
        SUMIFS(
            Table_Inp_Waterfall[New_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    exp_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Expansion_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    con_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Contraction_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    churn_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Churn_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    start_mrr+new_mrr+exp_mrr-con_mrr-churn_mrr
)
```

```excel
=Ending_MRR*12
```

ARR aquí es un run rate anualizado de MRR, no ingresos anuales reconocidos ni un pronóstico de ingresos.

</details>

<details>
<summary>Retención y churn de clientes</summary>

**Propósito:** Separar la retención de ingresos de la pérdida de número de clientes.

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR+Expansion_MRR_Amount
     -Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR-Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Opening_Customer_Count=0,
    NA(),
    Churned_Customer_Count/Opening_Customer_Count
)
```

El diseño de referencia a veces usa cero como fallback cuando un denominador es cero. Para reportes de gestión, un estado explícito de no disponible generalmente es más seguro porque el cero puede confundirse con un resultado medido. El libro de trabajo de producción debería aplicar una política consistente y mostrarla claramente.

</details>

<details>
<summary>Embudo de ventas y variación de pronóstico</summary>

**Propósito:** Identificar la pérdida de conversión entre la agendación de demostraciones, la asistencia y los resultados cerrados-ganados.

```excel
=IF(
    Demos_Booked_Count=0,
    NA(),
    Demos_Held_Count/Demos_Booked_Count
)
```

```excel
=IF(
    Demos_Held_Count=0,
    NA(),
    Closed_Won_Count/Demos_Held_Count
)
```

```excel
=IF(
    Forecast_Pipeline_Val=0,
    NA(),
    (Closed_Won_Count-Forecast_Pipeline_Val)
    /Forecast_Pipeline_Val
)
```

La expresión final es apropiada solo cuando el campo de pronóstico y el campo de real usan la misma unidad. Si el pronóstico representa valor monetario de pipeline pero los reales representan conteos de clientes, no deben compararse directamente. El diseño fuente debe resolver si `Forecast_Pipeline_Val` representa wins esperados o un valor monetario antes de la implementación.

</details>

<details>
<summary>Costos de personal y análisis departamental</summary>

**Propósito:** Agregar salarios y costos patronales por departamento, luego calcular la participación del departamento en la compensación total.

```excel
=SUMIFS(
    Table_Inp_Headcount[Base_Salary_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
+
SUMIFS(
    Table_Inp_Headcount[Taxes_Benefits_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
```

Lista dinámica de departamentos:

```excel
=SORT(
    UNIQUE(
        FILTER(
            Table_Inp_Headcount[Department_Name],
            Table_Inp_Headcount[Department_Name]<>""
        )
    )
)
```

Participación de compensación del departamento:

```excel
=IF(
    Total_Compensation=0,
    NA(),
    Department_Total_Comp/Total_Compensation
)
```

El costo de compensación y la plantilla deben usar definiciones de período compatibles. Dividir un monto de nómina de período parcial por una plantilla puntual puede producir un promedio engañoso a menos que la base de reportes esté documentada.

</details>

<details>
<summary>Listas dinámicas de excepciones y resúmenes de acciones de costos</summary>

**Propósito:** Mantener visibles las discrepancias materiales y las acciones de costos no resueltas sin filtrar manualmente en cada ciclo de reportes.

Filtrar registros por encima del umbral configurado:

```excel
=FILTER(
    Table_Exceptions_Log,
    Table_Exceptions_Log[Variance_Pct]>Param_Variance_Threshold,
    "No material exceptions"
)
```

Resumir los ahorros mensuales estimados para acciones aún no marcadas como realizadas:

```excel
=SUMIFS(
    Table_Cost_Actions[Monthly_Savings_Est],
    Table_Cost_Actions[Action_Status],
    "<>Realized"
)
```

El total de ahorros es una estimación de pipeline, no ahorros realizados. Los reportes deben distinguir acciones propuestas, aprobadas, en progreso y realizadas, y evitar tratar una estimación no verificada como un beneficio de efectivo confirmado.

</details>

### Reglas de validación

El libro de trabajo es tan confiable como los datos y definiciones que lo alimentan. Los siguientes controles describen el comportamiento de producción esperado.

| Campo o control | Regla de validación | Comportamiento de error esperado |
|---|---|---|
| Fecha de corte de reportes | Usar una fecha válida consistente con el período de reportes previsto | Señalar períodos faltantes o no coincidentes |
| Sistema fuente | Seleccionar un nombre de sistema fuente reconocido | Rechazar o señalar valores no mapeados |
| Marca de tiempo de extracción | Preservar el tiempo de extracción de la instantánea fuente | Señalar metadatos de linaje faltantes |
| Moneda y montos | Usar una moneda y representación numérica consistentes dentro de cada comparación | Señalar monedas incompatibles o valores malformados |
| Registros financieros | Distinguir la actividad del período de las instantáneas acumulativas | Prevenir la agregación duplicada de períodos |
| Movimientos de MRR | Ingresar contracción y churn como magnitudes de pérdida no negativas bajo la convención documentada | Señalar entradas de movimiento negativas o inconsistentes |
| Conciliación de MRR | Comprobar el MRR inicial más nuevo y expansión menos contracción y churn contra el MRR final | Señalar diferencias de conciliación no explicadas |
| Razones de retención | Requerir un denominador de MRR inicial válido y positivo | Mostrar no disponible en lugar de implicar un cero verificado |
| Embudo de ventas | Las demostraciones realizadas no deben exceder las agendadas para cohortes comparables; los conteos cerrados-ganados necesitan una base de atribución consistente | Señalar conteos imposibles y períodos inconsistentes |
| Comparación de pronósticos | Pronóstico y real deben usar la misma unidad y base de medición | Bloquear o señalar comparaciones incompatibles |
| Registros de empleados | Validar identificadores, mapeos de departamento, fechas de contratación y terminación | Señalar identidades duplicadas y fechas de ciclo de vida inválidas |
| Compensación | Validar montos numéricos, alineación de períodos y moneda consistente | Señalar datos de costos faltantes o inconsistentes |
| Variación entre fuentes | Comparar períodos, poblaciones y bases de medición equivalentes | Enrutar diferencias materiales para explicación |
| Umbral de variación | Referenciar el umbral configurado en lugar de incrustar un porcentaje fijo en las fórmulas | Recalcular las marcas dependientes cuando el parámetro cambie |
| Propiedad de acciones de costos | Requerir un propietario nombrado y un estado documentado para las acciones rastreadas | Señalar registros de acciones incompletos |
| Reporte de ahorros | Separar los ahorros esperados de los realizados | Prevenir que estimaciones de pipeline se reporten como resultados confirmados |
| Conciliación con reales cerrados | Comparar resultados oficiales con estimaciones para el mismo período y base contable | Registrar diferencias absolutas y relativas para revisión |
| Arrays dinámicos | Mantener los rangos de desbordamiento libres y preservar la estructura de tabla esperada | Resolver condiciones de `#SPILL!` antes de confiar en las salidas afectadas |
| Linaje de fuente | Retener identidad de fuente, período de reportes y marca de tiempo de lote | Tratar el linaje faltante como una excepción de revisión |

</details>

## Lógica de negocio y metodología

La herramienta se construye alrededor de un principio de gestión práctico: **la monitorización financiera solo es útil cuando cambia lo que la gestión puede ver, investigar y en lo que puede actuar antes del próximo cierre contable formal.**

En lugar de tratar las finanzas, la retención de clientes, las ventas y los costos de personal como funciones de reporte aisladas, el marco las conecta en un proceso de decisión recurrente. Cada método aborda un fallo específico en la forma en que la información operativa se revisa comúnmente.

- **Monitorización financiera basada en períodos:** Las estimaciones semanales basadas en devengo ofrecen una vista más temprana del burn neto que un cierre de fin de mes retrasado. Comparar el monto consumido tanto con el objetivo mensual como con el progreso del mes transcurrido ayuda a distinguir un saldo manejable de una trayectoria de gasto insostenible.

- **Análisis de movimientos de ingresos recurrentes:** Separar nuevos negocios, expansión, contracción y churn evita que el crecimiento neto de MRR oculte el deterioro entre clientes existentes. La gestión puede distinguir el desempeño de adquisición de la calidad de retención y priorizar la acción correctiva relevante.

- **Diagnósticos de conversión y retención:** GRR, NRR, churn de logos, asistencia a demostraciones y conversión de realización-a-cierre miden diferentes etapas del desempeño del negocio. Juntas, ayudan a determinar si una debilidad se concentra en la retención de clientes, la calidad de los leads, la ejecución de ventas o la base de clientes subyacente.

- **Gestión de excepciones basada en umbrales:** Las diferencias materiales entre registros fuente comparables se señalan para investigación. El umbral es un disparador de revisión, no una prueba de error. Las explicaciones escritas y el estado de aprobación hacen visibles las discrepancias no resueltas en lugar de permitir que desaparezcan dentro de totales agregados.

- **Propiedad de acciones y calibración post-cierre:** Las propuestas de reducción de costos reciben propietarios, plazos, ahorros estimados y estados de ejecución. Una vez que los resultados financieros oficiales estén disponibles, las estimaciones previas se comparan con los reales cerrados para que los errores recurrentes de estimación puedan identificarse y los reportes futuros mejorarse.

El flujo de trabajo resultante conecta la evidencia operativa con una decisión, la decisión con una acción responsable y la acción con una revisión posterior. No elimina la incertidumbre ni reemplaza el juicio profesional. Crea una forma repetible de gestionar la incertidumbre antes de que la información retrasada se convierta en un pasivo operativo.

## Procedimiento operativo

El calendario operativo de referencia está diseñado para entregar la revisión de gestión para el lunes al final del día, hora del Este.

| Fecha límite objetivo | Actividad | Rol responsable | Evidencia de finalización |
|---|---|---|---|
| Lunes, 10:00 AM | Actualizar la fecha de corte de reportes y los supuestos de progreso del mes | Analista financiero | Período de reportes correcto y parámetros aprobados |
| Lunes, 11:30 AM | Importar instantáneas financieras, de clientes, de ventas y de nómina | Analista financiero u operador de datos | Registros fuente agregados con fechas y metadatos apropiados |
| Lunes, 2:00 PM | Comprobar la preparación de módulos e investigar discrepancias materiales | Analista financiero | Entradas faltantes resueltas y variaciones significativas explicadas |
| Lunes, 4:30 PM | Revisar KPIs y actualizar acciones de reducción de costos | Analista financiero y propietarios de departamento | Propietarios, estimaciones de ahorro, plazos y estados registrados |
| Lunes, 6:00 PM | Revisar y distribuir el panel ejecutivo | CEO, líder financiero o propietario de reportes designado | Vista de gestión final compartida o exportada |

Estos plazos son objetivos operativos de referencia, no garantías de programación automatizada. Las organizaciones deben adaptarlos a la disponibilidad de los sistemas fuente, los requisitos de aprobación internos y el calendario real de reportes.

### Roles y responsabilidades

- **Analista financiero:** Mantiene los parámetros de reportes, importa instantáneas de datos, investiga discrepancias, documenta explicaciones de variaciones y registra los reales cerrados oficiales.
- **Líderes de departamento:** Revisan los KPIs relevantes, explican cambios materiales y poseen las acciones aprobadas de reducción de costos.
- **CEO y comité ejecutivo:** Revisan la posición de burn, cuestionan las excepciones materiales y deciden qué acciones correctivas requieren intervención.
- **Equipo contable externo:** Suministra los resultados mensuales o trimestrales oficiales utilizados para calibrar las estimaciones operativas previas.

### Mantenimiento de datos

- Ingresa registros fuente solo en las tablas de entrada designadas.
- Conserva las fechas de reportes, los identificadores de fuente y las marcas de tiempo de extracción.
- Agrega registros al final de la tabla de Excel relevante para que las referencias estructuradas se expandan normalmente.
- Actualiza los diccionarios de dimensiones antes de introducir nuevos sistemas fuente o nombres de departamento.
- Evita editar manualmente celdas de cálculo protegidas, encabezados de tabla, rangos nombrados o áreas de desbordamiento de arrays dinámicos.
- Concilia las estimaciones con los resultados financieros oficiales usando períodos de reportes y definiciones contables consistentes.

## Compatibilidad y límites operativos

| Área | Requisito de referencia | Consideración operativa |
|---|---|---|
| Versión de Excel | Microsoft 365 recomendado; Excel 2021 o posterior como mínimo de referencia | Las funciones de arrays dinámicos como `LET`, `FILTER`, `UNIQUE`, `SORT`, `HSTACK` y `VSTACK` pueden no funcionar en versiones anteriores de Excel. Confirma la disponibilidad de funciones en el entorno objetivo. |
| Volumen de datos | Límite recomendado de aproximadamente 50,000 filas por tabla de entrada | Las tablas más grandes pueden aumentar la latencia de cálculo. El diseño de referencia recomienda archivar registros históricos cerrados cuando los volúmenes crecen sustancialmente. |
| Colaboración | OneDrive for Business o SharePoint | Conserva los nombres de tabla, encabezados, rangos nombrados y estructuras de cálculo durante la edición colaborativa. |
| Google Sheets | La migración es posible con adaptación de fórmulas | Las referencias estructuradas de Excel como `Table[Field]` deben traducirse. El comportamiento de fórmulas y arrays dinámicos debe volver a probarse después de la migración. |
| Integración de fuentes | Instantáneas periódicas de los sistemas de negocio existentes | La sincronización directa por API no está establecida por el diseño de este libro de trabajo. Los datos importados requieren mapeo de fuente y validación. |

La versión de navegador y la versión de Excel son formatos de entrega distintos. La disponibilidad de una aplicación HTML publicada, demo en vivo, libro de trabajo descargable o página de compra depende de los enlaces reales de despliegue y distribución configurados por el propietario del proyecto.

## Solución de problemas

<details>
<summary>Los arrays dinámicos devuelven #SPILL!</summary>

**Causa probable:** Valores existentes, celdas combinadas u otras obstrucciones ocupan el rango de desbordamiento esperado.

**Resolución:**

1. Selecciona la celda que contiene el error.
2. Inspecciona el rango de desbordamiento indicado por Excel.
3. Elimina el contenido no intencionado o resuelve los conflictos de celdas combinadas dentro de ese rango.
4. Recalcula y confirma que el array resultante cubre el área esperada.

No borres las celdas de cálculo indiscriminadamente. Verifica que cualquier contenido que se elimine no sea una entrada requerida o una fórmula.

</details>

<details>
<summary>Los datos nuevos no cambian el panel</summary>

**Causas probables:** La fecha de corte de reportes no se actualizó, los registros importados usan fechas inconsistentes, los datos se pegaron fuera de la tabla prevista o el cálculo de Excel está configurado en manual.

**Resolución:**

1. Comprueba la fecha de reportes en `02_Settings_Params`.
2. Confirma que los registros recién importados pertenecen a ese período de reportes.
3. Verifica que las filas estén dentro de la tabla de Excel relevante.
4. Comprueba el modo de cálculo de Excel y recalcula si es necesario.
5. Confirma que las métricas del panel afectadas hagan referencia a la tabla de entrada y al período esperados.

</details>

<details>
<summary>Cambiar el umbral de variación no tiene el efecto esperado</summary>

**Causa probable:** El porcentaje se ingresó con la escala incorrecta, o la fórmula relevante no hace referencia al parámetro nombrado previsto.

Por ejemplo, 8% debe ingresarse como `8%` o `0.08`, no `8`.

**Resolución:** Comprueba el valor del parámetro almacenado, el rango nombrado `Param_Variance_Threshold` y las fórmulas que impulsan las marcas de excepción. Confirma que la comparación usa el umbral previsto de manera consistente.

</details>

<details>
<summary>Los símbolos de moneda son incorrectos</summary>

**Causa probable:** El parámetro global de visualización de moneda no se ha actualizado, o algunas celdas de salida usan un formato de moneda fijo.

**Resolución:** Actualiza `Param_Currency_Symbol` en el área de configuración e inspecciona las fórmulas de visualización y formatos de número relevantes.

**Importante:** Cambiar un símbolo de moneda no convierte montos monetarios entre monedas. La conversión real de monedas requiere datos de tipo de cambio y una metodología de conversión explícita.

</details>

<details>
<summary>Las fórmulas devuelven #N/A, #VALUE! o valores cero inesperados</summary>

**Causas probables:** Coincidencias de fuente faltantes, texto en columnas numéricas, identificadores inconsistentes, fechas inválidas o denominadores cero.

**Resolución:**

1. Comprueba las filas fuente y confirma que los campos numéricos contienen números y no texto.
2. Comprueba que los identificadores de clientes y empleados coincidan en los registros relevantes.
3. Confirma que el período de reportes y los mapeos de fuente son consistentes.
4. Inspecciona las protecciones de denominadores y la lógica de manejo de errores.
5. Distingue un cero genuino de datos faltantes o de un cálculo que no puede realizarse.

Una fórmula de manejo de errores no debería convertir cada cálculo inválido en un cero de apariencia plausible. Cuando los datos estén incompletos o un denominador no esté disponible, la capa de reportes debería hacer visible esa limitación.

</details>

## Alcance de implementación y hoja de ruta

### Entregables de la implementación de referencia

El diseño especifica:

1. Siete hojas de cálculo coordinadas para configuración, ingesta de datos, cálculos, análisis, reportes de gestión, seguimiento de acciones y calibración de estimaciones.
2. Cuatro tablas de entrada fuente estandarizadas que cubren finanzas, movimientos de MRR, actividad de ventas y costos de personal.
3. Parámetros de configuración centralizados y diccionarios de dimensiones.
4. Un marco de cálculo para burn, MRR, ARR, retención, conversión de ventas y costos de compensación.
5. Revisión de variaciones materiales y seguimiento de acciones de reducción de costos.
6. Un proceso post-cierre para comparar estimaciones operativas con resultados contables oficiales.
7. Un procedimiento operativo semanal repetible y una guía de solución de problemas.

Estas son especificaciones de implementación. La integridad, corrección y comportamiento reales de un libro de trabajo o aplicación de navegador entregados deben verificarse contra los artefactos y casos de prueba correspondientes antes de la publicación.

### Desarrollo futuro

- **Semanas 1–4:** Ejecuta el flujo de trabajo de Excel a través de ciclos de reportes semanales repetidos. Valida las definiciones de KPIs, la alineación de períodos, los mapeos de fuente y los procedimientos de revisión de gestión.
- **Meses 2–3:** Evalúa la colaboración en línea y la extracción de fuentes asistida por IA. Considera la migración a Google Sheets u otro entorno colaborativo solo después de validar la compatibilidad de fórmulas y los requisitos de gobernanza.
- **Mes 6 en adelante:** Si los volúmenes de clientes y transacciones superan la capacidad del libro de trabajo, considera mover el procesamiento intensivo en cálculos a SQL o Python manteniendo una interfaz compacta de reportes ejecutivos.

La ruta de migración preserva la lógica de negocio y las definiciones de datos en lugar de tratar la hoja de cálculo en sí como el límite permanente del sistema.

## Otras herramientas de esta serie

Explora herramientas ligeras relacionadas de apoyo a decisiones y marcos analíticos:

- [HyVoid en GitHub](https://github.com/HyVoid) — modelos de hojas de cálculo adicionales y herramientas operativas.
- [Theseus Workshop](https://github.com/HyVoid) — marcos analíticos reutilizables para planificación de negocios, control financiero y toma de decisiones operativas.

## Licencia

Este proyecto está destinado a distribuirse bajo la **Licencia Apache 2.0**.

Consulta el archivo [LICENSE](LICENSE) para conocer los términos completos de la licencia. Antes de publicar, asegúrate de que el repositorio contenga el texto correcto de Apache License 2.0 y de que la designación de licencia coincida con los términos de distribución reales de cada artefacto incluido.
