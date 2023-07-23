export default ({
    "en":{
        carousels: [
            {
                'title': '2023 Annual Workshop',
                'subtitle': 'The annual computational thinking and competitive programming course for girls begins on April 22. You can choose between online or hybrid format.',
                'image': 'banner/banner-img-1.png',
                'join_message': '¡Apply!',
                'join_link': 'https://forms.gle/iJkPPoX6Mfvqcr8D9',
                'type': 'router-link'
            },
            {
                'title': 'Volunteering',
                'subtitle': 'We empower girls through teaching them to code and inspiring them to explore scientific and technological areas.',
                'image': 'banner/banner-img-1.png',
                'action': 'Get involved in volunteering',
                'link': '/volunteer',
                'type': 'router-link'
            }
        ],
        projectsHome:[
            {
                'title':'Inspiring Activities',
                'type':'is-info',
                'image':'lamarr.jpg',
                'path':'/incentiva/',
                'description':'Talks by Mujeres Pro and introduction workshops to new technologies to motivate learning.'
            },
            {
                'title':'Programming Annual Workshop',
                'type':'is-primary',
                'image':'laschicaspueden.jpg',
                'path':'/empodera/',
                'description':'Computational thinking and competitive programming course in Python or C++ for high school girls.'
            },
            {
                'title':'Competitive Programming',
                'type':'is-warning',
                'image':'ninastic.jpg',
                'path':'/incentiva/',
                'description':'Classes and mentoring to train to participate in School Programming Competitions.'
            },
            {
                'title':'Arduino Quest',
                'type':'is-success',
                'image':'rosalind.jpeg',
                'path':'/potencia/',
                'description':'Challenge carried out together with the Millennium Institute Fundational Research on Data to develop projects with Arduino.'
            },
        ],
        information:[
            {
                'type':'left',
                'image':'inspired.jpg',
                'titulo':'About Us',
                'text':'Niñas Pro began in 2016 as a university activity carried out by a group of female students from the \
                Faculty of Physical Sciences and Mathematics of the University of Chile to increase the interest of girls in \
                programming. Today we are constituted as a non-profit association and we are a network of more than 80 \
                volunteers distributed in various regions of the country with the support of different universities and \
                companies interested in reducing the gender gap in STEM.',
                'boton':'Our history',
                'Path':'/somos/'
            },
            {
                'type':'right',
                'image':'django-girls.jpg',
                'titulo':'Niñas Pro Headquarters and Volunteering',
                'text':'We want all the girls in Chile to experience science and technology free of gender stereotypes. \
                If you want to help us reach more girls, you can apply to join the volunteer program or to create a branch \
                in your region. You can also contribute with donations.',
                'boton':'More Information',
                'Path':'/volunteer/'
            },
        ],
        metrics: [
            {
                'name': 'Girls',
                'value': '1820'
            },
            {
                'name': 'Programming Hours',
                'value': '+23K'
            },
            {
                'name': 'Headquarters',
                'value': '5'
            },
            {
                'name': 'Volunteers',
                'value': '62'
            }
        ]
    },
    "ro": {
        "carousels": [
            {
                "title": "Atelierul Anual 2023",
                "subtitle": "Pe 22 aprilie începe cursul anual de gândire computatională și programare competitivă pentru fete. Puteți alege între formatul online sau hibrid.",
                "image": "banner/banner-img-1.png",
                "action": "Ce presupune?",
                "join_message": "Înscrie-te!",
                "join_link": "https://forms.gle/iJkPPoX6Mfvqcr8D9",
                "type": "nuxt-link"
            },
            {
                "title": "Voluntariat în Niñas Pro",
                "subtitle": "Împuternicim fetele și adolescente prin învățarea programării și inspirăm vocații științifice și tehnologice. Tu poți ajuta, de asemenea, făcând voluntariat.",
                "image": "banner/banner-img-1.png",
                "action": "Aplică!",
                "link": "/volunteer",
                "type": "nuxt-link"
            }
        ],
        "projectsHome": [
            {
                "title": "Activități Inspirante",
                "type": "is-warning",
                "image": "ninastic.jpg",
                "path": "/incentiva/",
                "description": "Prelegeri susținute de Mujeres Pro și ateliere introductive la noi tehnologii pentru a motiva învățarea."
            },
            {
                "title": "Curs Anual de Programare",
                "type": "is-primary",
                "image": "laschicaspueden.jpg",
                "path": "/empodera/",
                "description": "Curs de programare în Python sau C++ pentru dezvoltarea unor noi abilități."
            },
            {
                "title": "Programare Competitivă",
                "type": "is-info",
                "image": "lamarr.jpg",
                "path": "/inspira/",
                "description": "Cursuri și mentorat pentru pregătirea participării la Competițiile Școlare de Programare."
            },
            {
                "title": "Arduino Quest",
                "type": "is-success",
                "image": "rosalind.jpeg",
                "path": "/potencia/",
                "description": "Provocare realizată împreună cu Institutul Mileniu Fundamentele Datelor pentru dezvoltarea de proiecte cu Arduino."
            }
        ],
        "information": [
            {
                "type": "left",
                "image": "inspired.jpg",
                "titulo": "Despre Noi",
                "text": "Niñas Pro a început în 2016 ca o activitate universitară realizată de un grup de studente de sex feminin din Facultatea de Științe Fizice și Matematice a Universității din Chile pentru a crește interesul fetelor pentru programare. Astăzi suntem o asociație non-profit și suntem o rețea de peste 80 de voluntari distribuiți în diferite regiuni ale țării, cu sprijinul diferitelor universități și companii interesate să reducă discrepanțele de gen în STEM.",
                "boton": "Istoria noastră",
                "Path": "/history/"
            },
            {
                "type": "right",
                "image": "django-girls.jpg",
                "titulo": "Sediul Niñas Pro și Voluntariat",
                "text": "Dorim ca toate fetele din Chile să experimenteze știința și tehnologia liber de stereotipuri de gen. Dacă doriți să ne ajutați să ajungem la mai multe fete, puteți aplica pentru a vă alătura programului de voluntariat sau pentru a crea o filială în regiunea dvs. De asemenea, puteți contribui cu donații.",
                "boton": "Mai multe informații",
                "Path": "/volunteer/"
            }
        ],
        "metrics": [
            {
                "name": "Fete",
                "value": "1820"
            },
            {
                "name": "Ore de programare",
                "value": "+23K"
            },
            {
                "name": "Sediile",
                "value": "5"
            },
            {
                "name": "Voluntari",
                "value": "62"
            }
        ]
    }
})
