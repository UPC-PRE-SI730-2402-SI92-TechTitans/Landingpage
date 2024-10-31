let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sectionBtns = document.querySelectorAll('.btn-nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

sectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        sectionBtns.forEach((btn) => btn.classList.remove('nav-active'));
        btn.classList.add('nav-active');
    });
});



let menuIcon = document.getElementById('menu-icon');

let firstNavItem = document.querySelector('.navbar li:first-child');

function isElementVisible(element) {
    return (element.offsetWidth > 0 || element.offsetHeight > 0);
}

function toggleMenuIcon() {
    if (!isElementVisible(firstNavItem)) {
        menuIcon.style.display = 'block'; // Show the menu icon
    } else {
        menuIcon.style.display = 'none'; // Hide the menu icon
    }
}

toggleMenuIcon();
window.addEventListener('resize', toggleMenuIcon);


const allCard = Array.from(document.querySelectorAll('.card'));
const container = document.querySelector('.card-wrapper');
const indicator = document.querySelector('.indicator');

const arrHeight = allCard.map(item=> {
    return item.offsetHeight
})
const maxHeight = Math.max(...arrHeight);

allCard.forEach((item, idx)=> {
    item.style.height = maxHeight + 'px';
    item.id = 'card-' + idx;

    const a = document.createElement('a');
    a.href = '#' + item.id
    indicator.appendChild(a);
})

container.style.maxHeight = maxHeight + 'px';

const allIndicator = document.querySelectorAll('.indicator a');

allIndicator[0].classList.add('active');

allIndicator.forEach(item=> {
    item.addEventListener('click', function () {
        allIndicator.forEach(i=> {
            i.classList.remove('active');
        })
        item.classList.add('active');
    })
})

container.addEventListener('scroll', function () {
    let linkActive;
    allCard.forEach(item=> {
        if(this.scrollTop >= item.offsetTop - (item.offsetHeight / 2) - 28 && this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
            linkActive = item.id
        }
    })
    allIndicator.forEach(item=> {
        if(item.getAttribute('href') === ("#" + linkActive)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
})

function showImage(type,subheadingText,color) {
    const displayImage = document.getElementById("displayImage");
    const subheading = document.getElementById("subheading");

    const images = {
        plane: "images/plane.jpg",
        hotel: "images/hotel.jpg",
        heart: "images/heart.jpg",
        all: "images/all.jpg"
    };

    displayImage.style.opacity = 0;
    setTimeout(() => {
        displayImage.src = images[type];
        displayImage.style.opacity = 1; // Fade-in effect
    }, 300);
    subheading.textContent = subheadingText;
    subheading.style.color = color;
}

const translations = {
    en: {
        services: "Services",
        plans: "Plans",
        reviews: "Reviews",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",
        stressFree: "Less stress when sharing expenses",
        onTrips: "on trips",
        sharedExpenses: "Keep track of expenses and balances shared with roommates, travelers, groups, friends and family.",
        manageFinances: "Manage your shared finances easily and transparently",
        trackExpenses: "Keep track of your expenses",
        trackDescription: "Control your expenses and shared balances.",
        organizeExpenses: "Organize expenses",
        organizeDescription: "Share expenses with your roommates, friends and family.",
        addExpenses: "Add expenses with ease",
        addDescription: "Quickly add expenses on the fly before you forget who paid.",
        ourPlans: "Our Plans",
        monthlyPlanTitle: "One month subscription",
        appFeaturesIntro1: "With our app, you will enjoy:",
        feature1:"Divide and record expenses",
        feature2:"Automatic calculation of balances",
        feature3:"Notifications and reminders",
        feature4:"Detailed transaction log",
        feature5:"Organize by groups and labels",
        feature6:"Multiple group management",
        feature7:"Receipt upload",
        feature8:"Foreign currency conversion",
        feature9:"Advanced reporting features",
        feature10:"Priority support",
        feature11:"Advanced team management",
        feature12:"Integration with accounting tools",
        feature13:"24/7 support",
        feature14:"Advanced customization",
        feature15:"Advanced security",
        annualPlanTitle:"Subscription per year",
        appFeaturesIntro2:"With our app, you will enjoy:",
        businessPlanTitle:"Business subscription",
        appFeaturesIntro3:"With our app, you will enjoy:",
        userOpinionTitlePart1:"What users",
        userOpinionTitlePart2: "say about us",
        reviewsComment: "Our customers send us a lot of smiles and we appreciate them for that.",
        userSince1:"Customer since 04/23/2024",
        userReview1: "“FinanceGuard has been a real lifesaver for our group of friends. We used to waste hours trying to figure out who owed how much after every outing or trip. Now, with this app, everything is much simpler. We can split expenses evenly and keep a detailed record of our transactions. Plus, the notification feature helps us remember about pending payments, which has avoided a lot of misunderstandings.”",
        userSince2:"Customer since 02/18/2024",
        userReview2: "I can't praise FinanceGuard enough! As someone who has always hated dealing with shared finances, this app has been a real game-changer for me. I can now keep track of my shared expenses quickly and easily, and most importantly, stress-free. The interface is very intuitive and easy to use, even for someone like me who isn't very tech-savvy.",
        userSince3:"Customer since 01/30/2024",
        userReview3: "Since I discovered FinanceGuard, my life has been so much easier. As someone who shares expenses with roommates and friends frequently, this app has been a real game-changer. I love how easy it is to split expenses and keep track of who has paid what.",
        userSince4:"Customer since 12/04/2024",
        userReview4: "I am impressed by how effective FinanceGuard is in managing my shared finances. As someone who frequently travels with friends, this app has been a real lifesaver. We can now easily split our travel expenses and keep detailed records of our transactions, which was previously a tedious and error-prone task.",
        userSince5:"Customer since 03/09/2024",
        userReview5: "FinanceGuard has been an indispensable tool in managing our shared finances. As a large family, it has always been a challenge to keep an accurate record of who has paid what and who owes how much. However, since we started using PocketPartners, everything has become much clearer and more organized. The app allows us to easily split expenses, set budgets, and keep detailed track of our transactions.",
        subscribeTitle:"Sign up now and simplify your shared finances with FinanceGuard!",
        subscribeButton:"Subscribe",
        footerDescription:"Manage your shared finances easily and transparently",
        companyTitle:"Company",
        about:"About",
        careers:"Careers",
        logistic:"Logistic",
        privacyPolicy:"Privacy & Policy",
        contactTitle:"Contact",
        helpFaq:"Help/FAQ",
        press:"Press",
        affiliates:"Affiliates",
        moreTitle:"More",
        pressCentre:"Press Centre",
        ourBlog:"Our Blog",
        lowFareTips:"Low fare tips",
        copyright:"Copyright, Finance Guard 2024. All rights reserved",
        termsConditions:"Terms and Conditions",
        register: "Register now and simplify your shared finances with FinanceGuard!",
        footerText: "Manage your shared finances easily and transparently",
    },
    es: {
        services: "Servicios",
        plans: "Planes",
        reviews: "Reseñas",
        contact: "Contacto",
        login: "Iniciar Sesión",
        signup: "Registrarse",
        stressFree: "Menos estrés a la hora de compartir gastos",
        onTrips: "en viajes",
        sharedExpenses : "Lleva un registro de los gastos y saldos compartidos con compañeros de piso, de viaje, grupos, amigos y familia.",
        manageFinances: "Gestiona tus finanzas compartidas de manera fácil y transparente",
        trackExpenses: "Haz un seguimiento de tus gastos",
        trackDescription: "Controla tus gastos y saldos compartidos.",
        organizeExpenses: "Organiza gastos",
        organizeDescription: "Divide gastos con tus compañeros de piso, amigos y familia.",
        addExpenses: "Añade gastos con facilidad",
        addDescription: "Añade gastos rápidamente sobre la marcha antes de olvidar quién ha pagado.",
        ourPlans: "Nuestros Planes",
        monthlyPlanTitle: "Suscripción por un mes",
        appFeaturesIntro1: "Con nuestra aplicación, disfrutarás de:",
        feature1:"Divide y registra gastos",
        feature2:"Cálculo automático de saldos",
        feature3:"Notificaciones y recordatorios",
        feature4:"Registro detallado de transacciones",
        feature5:"Organización por grupos y etiquetas",
        feature6:"Manejo de múltiples grupos",
        feature7:"Carga de recibos",
        feature8:"Conversión a moneda extranjera",
        feature9:"Funciones avanzadas de generación de informes",
        feature10:"Soporte prioritario",
        feature11:"Gestión avanzada de equipos",
        feature12:"Integración con herramientas de contabilidad",
        feature13:"Soporte 24/7",
        feature14:"Personalización avanzada",
        feature15:"Seguridad avanzada",
        annualPlanTitle:"Suscripción por año",
        appFeaturesIntro2:"Con nuestra aplicación, disfrutarás de:",
        businessPlanTitle:"Suscripción empresarial",
        appFeaturesIntro3:"Con nuestra aplicación, disfrutarás de:",
        userOpinionTitlePart1:"Lo que los usuarios",
        userOpinionTitlePart2: "dicen de nosotros",
        reviewsComment: "Nuestros clientes nos envían un montón de sonrisas y los apreciamos por eso",
        userSince1:"Cliente desde 23/04/2024",
        userReview1: "FinanceGuard ha sido una verdadera salvación para nuestro grupo de amigos. Antes solíamos perder horas tratando de calcular quién debía cuánto después de cada salida o viaje. Ahora, con esta aplicación, todo es mucho más sencillo. Podemos dividir los gastos de manera equitativa y llevar un registro detallado de nuestras transacciones. Además, la función de notificaciones nos ayuda a recordar los pagos pendientes, lo cual ha evitado muchos malentendidos.",
        userSince2:"Cliente desde 18/02/2024",
        userReview2: "¡No puedo dejar de elogiar a FinanceGuard! Como una persona que siempre ha odiado lidiar con las finanzas compartidas, esta aplicación ha sido un verdadero cambio de juego para mí. Ahora puedo llevar un seguimiento de mis gastos compartidos de manera rápida y sencilla, y lo más importante, sin estrés. La interfaz es muy intuitiva y fácil de usar, incluso para alguien como yo que no es muy hábil con la tecnología.",
        userSince3:"Cliente desde 30/01/2024",
        userReview3: "Desde que descubrí FinanceGuard, mi vida ha sido mucho más fácil. Como alguien que comparte gastos con compañeros de piso y amigos con frecuencia, esta aplicación ha sido un verdadero cambio de juego. Me encanta lo fácil que es dividir los gastos y llevar un registro de quién ha pagado qué",
        userSince4:"Cliente desde 12/04/2024",
        userReview4: "Estoy impresionado por la eficacia de FinanceGuard para gestionar mis finanzas compartidas. Como alguien que viaja frecuentemente con amigos, esta aplicación ha sido un verdadero salvavidas. Ahora podemos dividir fácilmente los gastos del viaje y llevar un registro detallado de nuestras transacciones, lo cual antes era una tarea tediosa y propensa a errores.",
        userSince5:"Cliente desde 09/03/2024",
        userReview5: "FinanceGuard ha sido una herramienta indispensable en la gestión de nuestras finanzas compartidas. Como familia numerosa, siempre ha sido un desafío mantener un registro preciso de quién ha pagado qué y quién debe cuánto. Sin embargo, desde que comenzamos a utilizar PocketPartners, todo se ha vuelto mucho más claro y organizado. La aplicación nos permite dividir fácilmente los gastos, establecer presupuestos y realizar un seguimiento detallado de nuestras transacciones",
        subscribeTitle:"¡Regístrate ahora y simplifica tus finanzas compartidas con FinanceGuard!",
        subscribeButton:"Subscribe",
        footerDescription:"Gestiona tus finanzas compartidas de manera fácil y transparente",
        companyTitle:"Compañia",
        about:"Acerca de",
        careers:"Carreras",
        logistic:"Logistica",
        privacyPolicy:"Politica de privacidad",
        contactTitle:"Contacto",
        helpFaq:"Ayuda/Preguntas frecuentes",
        press:"Prensa",
        affiliates:"Afiliados",
        moreTitle:"Más",
        pressCentre:"Centro de Prensa",
        ourBlog:"Nuestro Blog",
        lowFareTips:"Consejos sobre tarifas bajas",
        copyright:"Copyright, FinanceGuard 2024.Todos los derechos reservados",
        termsConditions:"Términos & Condiciones",
        register: "¡Regístrate ahora y simplifica tus finanzas compartidas con FinanceGuard!",
        footerText: "Gestiona tus finanzas compartidas de manera fácil y transparente",
    }
};

function changeLanguage(language) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[language][key];
    });
}
