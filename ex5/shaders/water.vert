#ifdef GL_ES
precision highp float;
#endif


attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {

    vec3 offset;

    offset.z = texture2D(uSampler2, timeFactor*vec2(0.03,0.03) + aTextureCoord).b*0.05;
    offset.xy = vec2(0.0, 0.0);    
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = aTextureCoord;
}

