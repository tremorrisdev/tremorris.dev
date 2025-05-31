export const useProjects = () => {
  const createBg = ({ dark, light }: { dark: string; light: string }) =>
    `bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%),url('${light}')] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%),url('${dark}')]`

  const projects = [
    {
      name: 'Chattr',
      subtitle: 'Realtime Chat & Analytics',
      bg: createBg({ light: '/chattr/home_lt.png', dark: '/chattr/home.png' }),
      img: ['/chattr/home.png'],
      description:
        'Tauri-hosted desktop web application facilitating realtime messaging, logistics, and analytics across a fleet of over a thousand drivers.',
      stack: ['T-SQL', 'C#', 'Vue', 'Nuxt', 'Tauri'],
    },
    {
      name: 'TSI Cafe',
      subtitle: 'Intranet App Collection',
      bg: createBg({ light: '/cafe/home_lt.png', dark: '/cafe/home.png' }),
      img: [
        '/cafe/home.png',
        '/cafe/hr.png',
        '/cafe/payroll.png',
        '/cafe/helpdesk.png',
        '/cafe/fv.png',
      ],
      description:
        'Intranet website that hosts over 50 internal applications such as our employee management system, payroll integrations, help-desk client, logistics platforms, etc.',
      stack: ['T-SQL', 'C#', 'Vue', 'Nuxt'],
    },
    {
      name: 'TSI Admin Center',
      subtitle: 'Android Environment Manager',
      bg: 'bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%)] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%)]',
      img: [],
      description:
        'Central dependency that provides authentication, log collection, long-running network operations, and notification support for all of TSI’s applications running in a managed Android environment.',
      stack: ['Android', 'Kotlin'],
    },
    {
      name: 'DriverPortal',
      subtitle: 'Employee Dashboard',
      bg: createBg({ light: '/driver/home_lt.png', dark: '/driver/home.png' }),
      img: [
        '/driver/home_lt.png',
        '/driver/terminals.png',
        '/driver/miles.png',
        '/driver/lc.png',
      ],
      description:
        "Central portal for TSI's drivers to manage paystubs, view trip details, track mileage, access educational material, find terminal information, and more.",
      stack: ['T-SQL', 'C#', 'Vue'],
    },
  ]

  const route = useRoute()
  const current = computed(() =>
    projects.find((p) => p.name === route.params.project),
  )

  return {
    projects,
    current,
  }
}
