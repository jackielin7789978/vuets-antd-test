import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      menuTree: [
        {
          id: '1',
          name: '首頁',
          path: '/',
          icon: 'HomeOutlined',
          children: [],
        },
        {
          id: '2',
          name: '主控台',
          path: '/dashboard',
          icon: 'DashboardOutlined',
          children: [],
        },
        {
          id: '3',
          name: '自動化流程',
          icon: 'ApartmentOutlined',
          children: [
            {
              id: '31',
              name: '選單一',
              path: '#31',
              icon: 'EditOutlined',
              children: [],
            },
            {
              id: '32',
              name: '選單二',
              path: '#32',
              icon: 'EditOutlined',
              children: [],
            },
            {
              id: '33',
              name: '選單三',
              path: '#33',
              icon: 'EditOutlined',
              children: [],
            },
          ],
        },
        {
          id: '4',
          name: '結論分析',
          icon: 'ApartmentOutlined',
          children: [
            {
              id: '41',
              name: '專案報表',
              path: '#41',
              icon: 'EditOutlined',
              children: [],
            },
            {
              id: '42',
              name: '聯絡人報表',
              path: '#42',
              icon: 'EditOutlined',
              children: [],
            },
            {
              id: '43',
              name: '更多報表',
              path: '#43',
              icon: 'EditOutlined',
              children: [
                {
                  id: '431',
                  name: '其他報表一',
                  path: '#431',
                  icon: 'EditOutlined',
                  children: [],
                },
                {
                  id: '432',
                  name: '其他報表二',
                  path: '#432',
                  icon: 'EditOutlined',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: '5',
          name: '元件',
          icon: 'AppstoreOutlined',
          children: [
            {
              id: '51',
              name: 'General',
              path: '/components/general',
            },
            {
              id: '52',
              name: 'Navigation',
              path: '/components/navigation',
            },
            {
              id: '53',
              name: 'Data Entry',
              path: '/components/data-entry',
            },
            {
              id: '54',
              name: 'Data Display',
              path: '/components/data-display',
            },
            {
              id: '55',
              name: 'Feedback',
              path: '/components/feedback',
            },
          ],
        },
      ],
    }
  },
})
