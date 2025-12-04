(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Initialisez EmailJS avec votre public key
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].init("VOTRE_PUBLIC_KEY"); // Remplacez par votre vraie clé
const ContactPage = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            };
            console.log('Envoi avec:', templateParams);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send('service_az3u2eg', 'template_ftj3abi', templateParams);
            console.log('SUCCESS!', result);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Erreur:', error);
            setSubmitStatus('error');
        } finally{
            setIsSubmitting(false);
            setTimeout(()=>setSubmitStatus('idle'), 5000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-purple/5 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-cyber-title text-4xl md:text-6xl font-bold text-white mb-6",
                                    children: [
                                        "Contactez-",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyber-cyan",
                                            children: "moi"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 39
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-xl max-w-2xl mx-auto",
                                    children: "Une idée de projet ? Une opportunité ? N'hésitez pas à me contacter. Je suis toujours ouvert aux discussions autour de nouvelles technologies et projets innovants."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-cyber-title text-2xl font-bold text-cyber-cyan mb-6",
                                                children: "Mes informations"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cyber-card p-6 cyber-glow-hover",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-cyber-cyan/10 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-6 h-6 text-cyber-cyan",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 94,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-white font-semibold",
                                                                            children: "Contact"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-300",
                                                                            children: "Formulaire sécurisé ci-contre"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cyber-card p-6 cyber-glow-hover",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-cyber-cyan/10 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-6 h-6 text-cyber-cyan",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 108,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-white font-semibold",
                                                                            children: "GitHub"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://github.com/Axo34080",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "text-cyber-cyan hover:text-white transition-colors",
                                                                            children: "github.com/Axo34080"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cyber-card p-6 cyber-glow-hover",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-cyber-cyan/10 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-6 h-6 text-cyber-cyan",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-white font-semibold",
                                                                            children: "LinkedIn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            className: "text-cyber-cyan hover:text-white transition-colors",
                                                                            children: "linkedin.com/in/marc-villain"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                            lineNumber: 129,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cyber-card p-6 border-cyber-green/20 bg-cyber-green/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-cyber-title text-lg font-bold text-cyber-green mb-3",
                                                children: "Actuellement disponible"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm",
                                                children: "En recherche d'opportunités pour un Master en alternance. Spécialisation développement d'applications et site web."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-cyber-title text-2xl font-bold text-cyber-cyan mb-6",
                                        children: "Envoyez-moi un message"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "name",
                                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                                children: "Nom complet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "name",
                                                                name: "name",
                                                                value: formData.name,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: "w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all",
                                                                placeholder: "Votre nom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "email",
                                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: "w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all",
                                                                placeholder: "votre@email.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "subject",
                                                        className: "block text-sm font-medium text-gray-300 mb-2",
                                                        children: "Sujet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "subject",
                                                        name: "subject",
                                                        value: formData.subject,
                                                        onChange: handleChange,
                                                        required: true,
                                                        className: "w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all",
                                                        placeholder: "Sujet de votre message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-sm font-medium text-gray-300 mb-2",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        value: formData.message,
                                                        onChange: handleChange,
                                                        required: true,
                                                        rows: 6,
                                                        className: "w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent transition-all resize-none",
                                                        placeholder: "Décrivez votre projet ou votre demande..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: `w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${isSubmitting ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-cyber-cyan text-cyber-dark hover:bg-white shadow-cyber-glow hover:shadow-cyber-glow-strong'}`,
                                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "animate-spin w-5 h-5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "4",
                                                                    className: "opacity-25"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 37
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                    className: "opacity-75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 37
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 35
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Envoi en cours..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 35
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)) : 'Envoyer le message'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green",
                                                children: "✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400",
                                                children: "❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio-nextjs/portfolio-nextjs/src/app/contact/page.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactPage, "gF3uQaS08GKL2JltXR5dxKm+1lo=");
_c = ContactPage;
const __TURBOPACK__default__export__ = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailJSResponseStatus",
    ()=>EmailJSResponseStatus
]);
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error'){
        this.status = _status;
        this.text = _text;
    }
}
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWebStorage",
    ()=>createWebStorage
]);
const createWebStorage = ()=>{
    if (typeof localStorage === 'undefined') return;
    return {
        get: (key)=>Promise.resolve(localStorage.getItem(key)),
        set: (key, value)=>Promise.resolve(localStorage.setItem(key, value)),
        remove: (key)=>Promise.resolve(localStorage.removeItem(key))
    };
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-client] (ecmascript)");
;
const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWebStorage"])()
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildOptions",
    ()=>buildOptions
]);
const buildOptions = (options)=>{
    if (!options) return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init",
    ()=>init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
;
;
const init = (options, origin = 'https://api.emailjs.com')=>{
    if (!options) return;
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey = opts.publicKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless = opts.blockHeadless;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider = opts.storageProvider;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList = opts.blockList;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate = opts.limitRate;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].origin = opts.origin || origin;
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendPost",
    ()=>sendPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
;
;
const sendPost = async (url, data, headers = {})=>{
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].origin + url, {
        method: 'POST',
        headers,
        body: data
    });
    const message = await response.text();
    const responseStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateParams",
    ()=>validateParams
]);
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateTemplateParams",
    ()=>validateTemplateParams
]);
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHeadless",
    ()=>isHeadless
]);
const isHeadless = (navigator)=>{
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headlessError",
    ()=>headlessError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const headlessError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](451, 'Unavailable For Headless Browser');
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateBlockListParams",
    ()=>validateBlockListParams
]);
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBlockedValueInParams",
    ()=>isBlockedValueInParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-client] (ecmascript)");
;
const isBlockListDisabled = (options)=>{
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBlockListParams"])(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string') return false;
    return options.list.includes(value);
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockedEmailError",
    ()=>blockedEmailError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const blockedEmailError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](403, 'Forbidden');
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateLimitRateParams",
    ()=>validateLimitRateParams
]);
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLimitRateHit",
    ()=>isLimitRateHit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-client] (ecmascript)");
;
const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage)=>{
    if (!options.throttle || !storage) {
        return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLimitRateParams"])(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "limitRateError",
    ()=>limitRateError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const limitRateError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](429, 'Too Many Requests');
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "send",
    ()=>send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const send = async (serviceID, templateID, templateParams, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = opts.storageProvider || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTemplateParams"])(templateParams);
    if (templateParams && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, templateParams)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateForm",
    ()=>validateForm
]);
const validateForm = (form)=>{
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendForm",
    ()=>sendForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const findHTMLForm = (form)=>{
    return typeof form === 'string' ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider || opts.storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    const currentForm = findHTMLForm(form);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateForm"])(currentForm);
    const formData = new FormData(currentForm);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, formData)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send-form', formData);
};
}),
"[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-nextjs/portfolio-nextjs/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    init: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"],
    send: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"],
    sendForm: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendForm"],
    EmailJSResponseStatus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$nextjs$2f$portfolio$2d$nextjs$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"]
};
}),
]);

//# sourceMappingURL=Desktop_portfolio-nextjs_portfolio-nextjs_d77e2584._.js.map