import React from 'react'
import AdminLayout from "../../components/Layouts/AdminLayout"
import PropTypes from 'prop-types'
import Link from 'next/link'

function Admin(props) {
  return (
    <div>
        <h1>Admin</h1>
        <Link as="admin/profile" href={{pathname: '/admin/profile', query: "user=Arav"}}><a>Profile</a></Link>
        <Link as="admin/edit-profile/[slug]" href={{pathname: "/admin/edit-profile", slug: "arav"}}><a>Edit Profile</a></Link>
    </div>
  )
}

Admin.propTypes = {}

Admin.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}

export default Admin
