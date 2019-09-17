import UniversalRouter from 'universal-router'

// const routes = [{
//     path: '', // optional
//     action: () => `<h1>Home</h1>`,
//   },
//   {
//     path: '/test', // optional
//     action: () => `<h1>Test</h1>`,
//   },
//   {
//     path: '/posts',
//     action: () => console.log('checking child routes for /posts'),
//     children: [{
//         path: '', // optional, matches both "/posts" and "/posts/"
//         action: () => `<h1>Posts</h1>`,
//       },
//       {
//         path: '/:id',
//         action: (context) => `<h1>Post #${context.params.id}</h1>`,
//       },
//     ],
//   },
// ]

const routes = {
  path: '/admin',
  children: [{
      path: '', // www.example.com/admin
      action: () => 'Admin Page',
    },
    {
      path: '/users',
      children: [{
          path: '', // www.example.com/admin/users
          action: () => 'User List',
        },
        {
          path: '/:username', // www.example.com/admin/users/john
          action: () => 'User Profile',
        },
      ],
    },
  ],
}

const router = new UniversalRouter(routes)

router.resolve('/admin').then(html => {
  document.body.innerHTML = html // renders: <h1>Posts</h1>
})
router.resolve('/admin/users').then(html => {
  document.body.innerHTML = html // renders: <h1>Posts</h1>
})
router.resolve('/admin/users/:username').then(html => {
  document.body.innerHTML = '<script>(function(){alert(1)})();<\/script>' // renders: <h1>Posts</h1>
})

router.resolve('/posts').then(html => {
  document.body.innerHTML = html // renders: <h1>Posts</h1>
})