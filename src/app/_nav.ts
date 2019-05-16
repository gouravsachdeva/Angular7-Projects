interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'cui-dashboard',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'IPD/OPD',
    url: '/patientdepartment',
    icon: 'far fa-hospital',
    children: [
      {
        name: 'Registration',
        url: '/patientdepartment',
        icon: 'far fa-registered'
      },
      {
        name: 'Dr. Visit',
        url: '/base/cards',
        icon: 'fas fa-user-md'
      },
      {
        name: 'Discharge',
        url: '/base/cards',
        icon: 'fas fa-eject'
      }
    ]
  },
  {
    name: 'Department',
    url: '/theme/colors',
    icon: 'fas fa-building',
    children: [
      {
        name: 'Add Department',
        url: '/base/cards',
        icon: 'fas fa-building'
      },
      {
        name: 'Department List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      }
    ]
  },
  {
    name: 'Doctor',
    url: '/theme/colors',
    icon: 'fas fa-user-md',
    children: [
      {
        name: 'Add Doctor',
        url: '/base/cards',
        icon: 'fas fa-stethoscope'
      },
      {
        name: 'Doctor List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      }
    ]
  },
  {
    name: 'Patient',
    url: '/theme/colors',
    icon: 'fas fa-user-injured',
    children: [
      {
        name: 'Add Patient',
        url: '/base/cards',
        icon: 'fas fa-procedures'
      },
      {
        name: 'Patient List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      }
    ]
  },
  {
    name: 'Bed Manager',
    url: '/theme/colors',
    icon: 'fas fa-bed',
    children: [
      {
        name: 'Add Bed',
        url: '/base/cards',
        icon: 'fas fa-folder-plus'
      },
      {
        name: 'Bed List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      },
      {
        name: 'Bed Assign',
        url: '/base/cards',
        icon: 'fas fa-bed'
      },
      {
        name: 'Bed Assign List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      }
    ]
  },
  {
    name: 'Medicines',
    url: '/theme/colors',
    icon: 'fas fa-pills',
    children: [
      {
        name: 'Medicine List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      },
      {
        name: 'Add Medicine',
        url: '/base/cards',
        icon: 'fas fa-prescription-bottle-alt'
      }
    ]
  },
  {
    name: 'Appointment',
    url: '/theme/colors',
    icon: 'fas fa-calendar-check',
    children: [
      {
        name: 'Add Appointment',
        url: '/base/cards',
        icon: 'far fa-calendar-check'
      },
      {
        name: 'Appointment List',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      },
      {
        name: 'Assign by All',
        url: '/base/cards',
        icon: 'far fa-list-alt'
      },
      {
        name: 'Assign by Doctor',
        url: '/base/cards',
        icon: 'fas fa-user-nurse'
      },
      {
        name: 'Assign by Representative',
        url: '/base/cards',
        icon: 'fas fa-random'
      },
      {
        name: 'Assign to Doctor',
        url: '/base/cards',
        icon: 'fas fa-user-md'
      }
    ]
  },
  {
    name: 'Prescription',
    url: '/theme/typography',
    icon: 'fas fa-file-medical',
    children: [
      {
        name: 'Add Patient Case Study',
        url: '/theme/typography',
        icon: 'fas fa-comment-medica'
      },
      {
        name: 'Patient Case Study List',
        url: '/theme/typography',
        icon: 'fas fa-prescription-bottle'
      },
      {
        name: 'Prescription List',
        url: '/theme/typography',
        icon: 'far fa-list-alt'
      }
    ]
  },
  {
    name: 'Operation',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Enquiry',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Settings',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  }
  // ,
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
