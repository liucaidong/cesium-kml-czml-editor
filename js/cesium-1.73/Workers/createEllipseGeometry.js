define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-43808565","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-49698167","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-ee01eec4","./EncodedCartesian3-e9c71cf0","./IndexDatatype-53503fee","./IntersectionTests-60a97ecf","./Plane-c946480f","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-cc7c5f49","./GeometryInstance-e56e7f4f","./EllipseGeometry-af5e6673"],function(r,e,t,c,n,i,o,a,s,f,l,d,m,p,y,u,G,b,C,E,A){"use strict";return function(e,t){return r.defined(t)&&(e=A.EllipseGeometry.unpack(e,t)),e._center=c.Cartesian3.clone(e._center),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),A.EllipseGeometry.createGeometry(e)}});