export default {
  formatter (d) {
    d.forEach((o) => {
      o.title = o.name
      if (o.name.length > 5) {
        o.name = o.name.substr(0, 5) + '...'
      }
      if (o.children && o.children.length > 0) {
        o.children = this.formatter(o.children)
      }
    })
    return d
  }
}