export const useProjects = () => {
  const projects = [
    {
      name: 'Chattr',
      subtitle: 'Realtime Chat & Analytics',
      content: '/chattr',
      bg: "bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%),url('/chattr/home_lt.png')] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%),url('/chattr/home.png')]",
      img: ['/chattr/home.png'],
      stack: ['T-SQL', 'C#', 'Vue', 'Nuxt', 'Tauri'],
    },
    {
      name: 'TSI Cafe',
      subtitle: 'Intranet App Collection',
      bg: "bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%),url('/cafe/home_lt.png')] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%),url('/cafe/home.png')]",
      img: [
        '/cafe/home.png',
        '/cafe/hr.png',
        '/cafe/payroll.png',
        '/cafe/helpdesk.png',
        '/cafe/fv.png',
      ],
      stack: ['T-SQL', 'C#', 'Vue', 'Nuxt'],
    },
    {
      name: 'TSI Admin Center',
      subtitle: 'Android Environment Manager',
      bg: "bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%)] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%)]",
      img: [] as string[],
      description:
        'Central dependency that provides authentication, log collection, long-running network operations, and notification support for all of TSI’s applications running in a managed Android environment.',
      stack: ['Android', 'Kotlin'],
    },
    {
      name: 'DriverPortal',
      subtitle: 'Employee Dashboard',
      bg: "bg-[radial-gradient(ellipse_200%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_10%,rgba(249,250,251,0.1)_30%),url('/driver/home_lt.png')] dark:bg-[radial-gradient(ellipse_200%_100%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_10%,rgba(17,24,39,0.1)_30%),url('/driver/home.png')]",
      img: [
        '/driver/home_lt.png',
        '/driver/terminals.png',
        '/driver/miles.png',
        '/driver/lc.png',
      ],
      stack: ['T-SQL', 'C#', 'Vue'],
    },
  ]

  const route = useRoute()
  const current = computed(() =>
    projects.find((p) => p.name === route.params.project)
  )

  return {
    projects,
    current,
  }
}
