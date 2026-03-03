var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSpring' )
  var i455 = data
  i454.spring = i455[0]
  i454.damper = i455[1]
  i454.targetPosition = i455[2]
  return i454
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor' )
  var i457 = data
  i456.m_TargetVelocity = i457[0]
  i456.m_Force = i457[1]
  i456.m_FreeSpin = i457[2]
  return i456
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointLimits' )
  var i459 = data
  i458.m_Min = i459[0]
  i458.m_Max = i459[1]
  i458.m_Bounciness = i459[2]
  i458.m_BounceMinVelocity = i459[3]
  i458.m_ContactDistance = i459[4]
  i458.minBounce = i459[5]
  i458.maxBounce = i459[6]
  return i458
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointDrive' )
  var i461 = data
  i460.m_PositionSpring = i461[0]
  i460.m_PositionDamper = i461[1]
  i460.m_MaximumForce = i461[2]
  i460.m_UseAcceleration = i461[3]
  return i460
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i463 = data
  i462.m_Spring = i463[0]
  i462.m_Damper = i463[1]
  return i462
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i465 = data
  i464.m_Limit = i465[0]
  i464.m_Bounciness = i465[1]
  i464.m_ContactDistance = i465[2]
  return i464
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i467 = data
  i466.m_ExtremumSlip = i467[0]
  i466.m_ExtremumValue = i467[1]
  i466.m_AsymptoteSlip = i467[2]
  i466.m_AsymptoteValue = i467[3]
  i466.m_Stiffness = i467[4]
  return i466
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i469 = data
  i468.m_LowerAngle = i469[0]
  i468.m_UpperAngle = i469[1]
  return i468
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i471 = data
  i470.m_MotorSpeed = i471[0]
  i470.m_MaximumMotorTorque = i471[1]
  return i470
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i473 = data
  i472.m_DampingRatio = i473[0]
  i472.m_Frequency = i473[1]
  i472.m_Angle = i473[2]
  return i472
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i475 = data
  i474.m_LowerTranslation = i475[0]
  i474.m_UpperTranslation = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i477 = data
  i476.position = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.scale = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.rotation = new pc.Quat(i477[6], i477[7], i477[8], i477[9])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i479 = data
  i478.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i479[0], i478.main)
  i478.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i479[1], i478.colorBySpeed)
  i478.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i479[2], i478.colorOverLifetime)
  i478.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i479[3], i478.emission)
  i478.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i479[4], i478.rotationBySpeed)
  i478.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i479[5], i478.rotationOverLifetime)
  i478.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i479[6], i478.shape)
  i478.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i479[7], i478.sizeBySpeed)
  i478.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i479[8], i478.sizeOverLifetime)
  i478.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i479[9], i478.textureSheetAnimation)
  i478.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i479[10], i478.velocityOverLifetime)
  i478.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i479[11], i478.noise)
  i478.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i479[12], i478.inheritVelocity)
  i478.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i479[13], i478.forceOverLifetime)
  i478.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i479[14], i478.limitVelocityOverLifetime)
  i478.useAutoRandomSeed = !!i479[15]
  i478.randomSeed = i479[16]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemMain()
  var i481 = data
  i480.duration = i481[0]
  i480.loop = !!i481[1]
  i480.prewarm = !!i481[2]
  i480.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[3], i480.startDelay)
  i480.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[4], i480.startLifetime)
  i480.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[5], i480.startSpeed)
  i480.startSize3D = !!i481[6]
  i480.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[7], i480.startSizeX)
  i480.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[8], i480.startSizeY)
  i480.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[9], i480.startSizeZ)
  i480.startRotation3D = !!i481[10]
  i480.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[11], i480.startRotationX)
  i480.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[12], i480.startRotationY)
  i480.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[13], i480.startRotationZ)
  i480.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i481[14], i480.startColor)
  i480.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[15], i480.gravityModifier)
  i480.simulationSpace = i481[16]
  request.r(i481[17], i481[18], 0, i480, 'customSimulationSpace')
  i480.simulationSpeed = i481[19]
  i480.useUnscaledTime = !!i481[20]
  i480.scalingMode = i481[21]
  i480.playOnAwake = !!i481[22]
  i480.maxParticles = i481[23]
  i480.emitterVelocityMode = i481[24]
  i480.stopAction = i481[25]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i482 = root || new pc.MinMaxCurve()
  var i483 = data
  i482.mode = i483[0]
  i482.curveMin = new pc.AnimationCurve( { keys_flow: i483[1] } )
  i482.curveMax = new pc.AnimationCurve( { keys_flow: i483[2] } )
  i482.curveMultiplier = i483[3]
  i482.constantMin = i483[4]
  i482.constantMax = i483[5]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i484 = root || new pc.MinMaxGradient()
  var i485 = data
  i484.mode = i485[0]
  i484.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i485[1], i484.gradientMin)
  i484.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i485[2], i484.gradientMax)
  i484.colorMin = new pc.Color(i485[3], i485[4], i485[5], i485[6])
  i484.colorMax = new pc.Color(i485[7], i485[8], i485[9], i485[10])
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i487 = data
  i486.mode = i487[0]
  var i489 = i487[1]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i489[i + 0]) );
  }
  i486.colorKeys = i488
  var i491 = i487[2]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i491[i + 0]) );
  }
  i486.alphaKeys = i490
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i495 = data
  i494.color = new pc.Color(i495[0], i495[1], i495[2], i495[3])
  i494.time = i495[4]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i499 = data
  i498.alpha = i499[0]
  i498.time = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemColorBySpeed()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i501[1], i500.color)
  i500.range = new pc.Vec2( i501[2], i501[3] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemColorOverLifetime()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i503[1], i502.color)
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemEmitter()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.rateOverTime)
  i504.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.rateOverDistance)
  var i507 = i505[3]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i507[i + 0]) );
  }
  i504.bursts = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemBurst()
  var i511 = data
  i510.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[0], i510.count)
  i510.cycleCount = i511[1]
  i510.minCount = i511[2]
  i510.maxCount = i511[3]
  i510.repeatInterval = i511[4]
  i510.time = i511[5]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemRotationBySpeed()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.x)
  i512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.y)
  i512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[3], i512.z)
  i512.separateAxes = !!i513[4]
  i512.range = new pc.Vec2( i513[5], i513[6] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemRotationOverLifetime()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.separateAxes = !!i515[4]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemShape()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.shapeType = i517[1]
  i516.randomDirectionAmount = i517[2]
  i516.sphericalDirectionAmount = i517[3]
  i516.randomPositionAmount = i517[4]
  i516.alignToDirection = !!i517[5]
  i516.radius = i517[6]
  i516.radiusMode = i517[7]
  i516.radiusSpread = i517[8]
  i516.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[9], i516.radiusSpeed)
  i516.radiusThickness = i517[10]
  i516.angle = i517[11]
  i516.length = i517[12]
  i516.boxThickness = new pc.Vec3( i517[13], i517[14], i517[15] )
  i516.meshShapeType = i517[16]
  request.r(i517[17], i517[18], 0, i516, 'mesh')
  request.r(i517[19], i517[20], 0, i516, 'meshRenderer')
  request.r(i517[21], i517[22], 0, i516, 'skinnedMeshRenderer')
  i516.useMeshMaterialIndex = !!i517[23]
  i516.meshMaterialIndex = i517[24]
  i516.useMeshColors = !!i517[25]
  i516.normalOffset = i517[26]
  i516.arc = i517[27]
  i516.arcMode = i517[28]
  i516.arcSpread = i517[29]
  i516.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[30], i516.arcSpeed)
  i516.donutRadius = i517[31]
  i516.position = new pc.Vec3( i517[32], i517[33], i517[34] )
  i516.rotation = new pc.Vec3( i517[35], i517[36], i517[37] )
  i516.scale = new pc.Vec3( i517[38], i517[39], i517[40] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemSizeBySpeed()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[1], i518.x)
  i518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.y)
  i518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[3], i518.z)
  i518.separateAxes = !!i519[4]
  i518.range = new pc.Vec2( i519[5], i519[6] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemSizeOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.mode = i523[1]
  i522.animation = i523[2]
  i522.numTilesX = i523[3]
  i522.numTilesY = i523[4]
  i522.useRandomRow = !!i523[5]
  i522.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[6], i522.frameOverTime)
  i522.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[7], i522.startFrame)
  i522.cycleCount = i523[8]
  i522.rowIndex = i523[9]
  i522.flipU = i523[10]
  i522.flipV = i523[11]
  i522.spriteCount = i523[12]
  var i525 = i523[13]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.sprites = i524
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.x)
  i528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.y)
  i528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.z)
  i528.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[4], i528.radial)
  i528.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[5], i528.speedModifier)
  i528.space = i529[6]
  i528.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[7], i528.orbitalX)
  i528.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[8], i528.orbitalY)
  i528.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[9], i528.orbitalZ)
  i528.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[10], i528.orbitalOffsetX)
  i528.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[11], i528.orbitalOffsetY)
  i528.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[12], i528.orbitalOffsetZ)
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemNoise()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.separateAxes = !!i531[1]
  i530.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[2], i530.strengthX)
  i530.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[3], i530.strengthY)
  i530.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[4], i530.strengthZ)
  i530.frequency = i531[5]
  i530.damping = !!i531[6]
  i530.octaveCount = i531[7]
  i530.octaveMultiplier = i531[8]
  i530.octaveScale = i531[9]
  i530.quality = i531[10]
  i530.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[11], i530.scrollSpeed)
  i530.scrollSpeedMultiplier = i531[12]
  i530.remapEnabled = !!i531[13]
  i530.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[14], i530.remapX)
  i530.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[15], i530.remapY)
  i530.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[16], i530.remapZ)
  i530.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[17], i530.positionAmount)
  i530.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[18], i530.rotationAmount)
  i530.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[19], i530.sizeAmount)
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemInheritVelocity()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.mode = i533[1]
  i532.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.curve)
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemForceOverLifetime()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[1], i534.x)
  i534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.y)
  i534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.z)
  i534.space = i535[4]
  i534.randomized = !!i535[5]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.limit)
  i536.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.limitX)
  i536.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.limitY)
  i536.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.limitZ)
  i536.dampen = i537[5]
  i536.separateAxes = !!i537[6]
  i536.space = i537[7]
  i536.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[8], i536.drag)
  i536.multiplyDragByParticleSize = !!i537[9]
  i536.multiplyDragByParticleVelocity = !!i537[10]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'mesh')
  i538.meshCount = i539[2]
  i538.activeVertexStreamsCount = i539[3]
  i538.alignment = i539[4]
  i538.renderMode = i539[5]
  i538.sortMode = i539[6]
  i538.lengthScale = i539[7]
  i538.velocityScale = i539[8]
  i538.cameraVelocityScale = i539[9]
  i538.normalDirection = i539[10]
  i538.sortingFudge = i539[11]
  i538.minParticleSize = i539[12]
  i538.maxParticleSize = i539[13]
  i538.pivot = new pc.Vec3( i539[14], i539[15], i539[16] )
  request.r(i539[17], i539[18], 0, i538, 'trailMaterial')
  i538.applyActiveColorSpace = !!i539[19]
  i538.enabled = !!i539[20]
  request.r(i539[21], i539[22], 0, i538, 'sharedMaterial')
  var i541 = i539[23]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.sharedMaterials = i540
  i538.receiveShadows = !!i539[24]
  i538.shadowCastingMode = i539[25]
  i538.sortingLayerID = i539[26]
  i538.sortingOrder = i539[27]
  i538.lightmapIndex = i539[28]
  i538.lightmapSceneIndex = i539[29]
  i538.lightmapScaleOffset = new pc.Vec4( i539[30], i539[31], i539[32], i539[33] )
  i538.lightProbeUsage = i539[34]
  i538.reflectionProbeUsage = i539[35]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i545 = data
  i544.name = i545[0]
  i544.tagId = i545[1]
  i544.enabled = !!i545[2]
  i544.isStatic = !!i545[3]
  i544.layer = i545[4]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i579 = data
  i578.name = i579[0]
  i578.halfPrecision = !!i579[1]
  i578.useSimplification = !!i579[2]
  i578.useUInt32IndexFormat = !!i579[3]
  i578.vertexCount = i579[4]
  i578.aabb = i579[5]
  var i581 = i579[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( !!i581[i + 0] );
  }
  i578.streams = i580
  i578.vertices = i579[7]
  var i583 = i579[8]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i583[i + 0]) );
  }
  i578.subMeshes = i582
  var i585 = i579[9]
  var i584 = []
  for(var i = 0; i < i585.length; i += 16) {
    i584.push( new pc.Mat4().setData(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3],  i585[i + 4], i585[i + 5], i585[i + 6], i585[i + 7],  i585[i + 8], i585[i + 9], i585[i + 10], i585[i + 11],  i585[i + 12], i585[i + 13], i585[i + 14], i585[i + 15]) );
  }
  i578.bindposes = i584
  var i587 = i579[10]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i587[i + 0]) );
  }
  i578.blendShapes = i586
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i593 = data
  i592.triangles = i593[0]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i599 = data
  i598.name = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i601[i + 0]) );
  }
  i598.frames = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i603 = data
  i602.name = i603[0]
  i602.width = i603[1]
  i602.height = i603[2]
  i602.mipmapCount = i603[3]
  i602.anisoLevel = i603[4]
  i602.filterMode = i603[5]
  i602.hdr = !!i603[6]
  i602.format = i603[7]
  i602.wrapMode = i603[8]
  i602.alphaIsTransparency = !!i603[9]
  i602.alphaSource = i603[10]
  i602.graphicsFormat = i603[11]
  i602.sRGBTexture = !!i603[12]
  i602.desiredColorSpace = i603[13]
  i602.wrapU = i603[14]
  i602.wrapV = i603[15]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i605 = data
  i604.name = i605[0]
  i604.atlasId = i605[1]
  i604.mipmapCount = i605[2]
  i604.hdr = !!i605[3]
  i604.size = i605[4]
  i604.anisoLevel = i605[5]
  i604.filterMode = i605[6]
  var i607 = i605[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 4) {
    i606.push( UnityEngine.Rect.MinMaxRect(i607[i + 0], i607[i + 1], i607[i + 2], i607[i + 3]) );
  }
  i604.rects = i606
  i604.wrapU = i605[8]
  i604.wrapV = i605[9]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i611 = data
  i610.name = i611[0]
  i610.index = i611[1]
  i610.startup = !!i611[2]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i613 = data
  i612.aspect = i613[0]
  i612.orthographic = !!i613[1]
  i612.orthographicSize = i613[2]
  i612.backgroundColor = new pc.Color(i613[3], i613[4], i613[5], i613[6])
  i612.nearClipPlane = i613[7]
  i612.farClipPlane = i613[8]
  i612.fieldOfView = i613[9]
  i612.depth = i613[10]
  i612.clearFlags = i613[11]
  i612.cullingMask = i613[12]
  i612.rect = i613[13]
  request.r(i613[14], i613[15], 0, i612, 'targetTexture')
  i612.usePhysicalProperties = !!i613[16]
  i612.focalLength = i613[17]
  i612.sensorSize = new pc.Vec2( i613[18], i613[19] )
  i612.lensShift = new pc.Vec2( i613[20], i613[21] )
  i612.gateFit = i613[22]
  i612.commandBufferCount = i613[23]
  i612.cameraType = i613[24]
  i612.enabled = !!i613[25]
  return i612
}

Deserializers["levelonemanager"] = function (request, data, root) {
  var i614 = root || request.c( 'levelonemanager' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'skipbutton')
  request.r(i615[2], i615[3], 0, i614, 'levelcomplete')
  request.r(i615[4], i615[5], 0, i614, 'shadowone')
  request.r(i615[6], i615[7], 0, i614, 'shadowtwo')
  request.r(i615[8], i615[9], 0, i614, 'oneshadow')
  request.r(i615[10], i615[11], 0, i614, 'twoshadow')
  request.r(i615[12], i615[13], 0, i614, 'threeshadow')
  request.r(i615[14], i615[15], 0, i614, 'fourshadow')
  request.r(i615[16], i615[17], 0, i614, 'fiveshadow')
  request.r(i615[18], i615[19], 0, i614, 'sixshadow')
  request.r(i615[20], i615[21], 0, i614, 'sevenshadow')
  request.r(i615[22], i615[23], 0, i614, 'eightshadow')
  request.r(i615[24], i615[25], 0, i614, 'nineshadow')
  request.r(i615[26], i615[27], 0, i614, 'oneobject')
  request.r(i615[28], i615[29], 0, i614, 'twoobject')
  request.r(i615[30], i615[31], 0, i614, 'threeobject')
  request.r(i615[32], i615[33], 0, i614, 'fourobject')
  request.r(i615[34], i615[35], 0, i614, 'fiveobject')
  request.r(i615[36], i615[37], 0, i614, 'sixobject')
  request.r(i615[38], i615[39], 0, i614, 'sevenobject')
  request.r(i615[40], i615[41], 0, i614, 'eightobject')
  request.r(i615[42], i615[43], 0, i614, 'nineobject')
  request.r(i615[44], i615[45], 0, i614, 'levelfourshadowone')
  request.r(i615[46], i615[47], 0, i614, 'levelfourshadowtwo')
  request.r(i615[48], i615[49], 0, i614, 'levelfourshadowthree')
  request.r(i615[50], i615[51], 0, i614, 'levelfourshadowfour')
  request.r(i615[52], i615[53], 0, i614, 'levelfourshadowfive')
  request.r(i615[54], i615[55], 0, i614, 'levelfourshadowsix')
  request.r(i615[56], i615[57], 0, i614, 'levelfourshadowseven')
  request.r(i615[58], i615[59], 0, i614, 'levelfourshadoweight')
  request.r(i615[60], i615[61], 0, i614, 'levelfourshadownine')
  request.r(i615[62], i615[63], 0, i614, 'levelfourshadowten')
  request.r(i615[64], i615[65], 0, i614, 'levelfouritemone')
  request.r(i615[66], i615[67], 0, i614, 'levelfouritemtwo')
  request.r(i615[68], i615[69], 0, i614, 'levelfouritemthree')
  request.r(i615[70], i615[71], 0, i614, 'levelfouritemfour')
  request.r(i615[72], i615[73], 0, i614, 'levelfouritemfive')
  request.r(i615[74], i615[75], 0, i614, 'levelfouritemsix')
  request.r(i615[76], i615[77], 0, i614, 'levelfouritemseven')
  request.r(i615[78], i615[79], 0, i614, 'levelfouritemeight')
  request.r(i615[80], i615[81], 0, i614, 'levelfouritemnine')
  request.r(i615[82], i615[83], 0, i614, 'levelfouritemten')
  request.r(i615[84], i615[85], 0, i614, 'loading')
  i614.levelthreecounter = i615[86]
  i614.levelfourcounter = i615[87]
  var i617 = i615[88]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.levels = i616
  request.r(i615[89], i615[90], 0, i614, 'completeparticle')
  request.r(i615[91], i615[92], 0, i614, 'completeoneparticle')
  request.r(i615[93], i615[94], 0, i614, 'completetwoparticle')
  request.r(i615[95], i615[96], 0, i614, 'collisionparticle')
  request.r(i615[97], i615[98], 0, i614, 'timecount')
  request.r(i615[99], i615[100], 0, i614, 'panelthree')
  request.r(i615[101], i615[102], 0, i614, 'panelfour')
  request.r(i615[103], i615[104], 0, i614, 'settingbutton')
  request.r(i615[105], i615[106], 0, i614, 'hint')
  request.r(i615[107], i615[108], 0, i614, 'rewardedpanel')
  i614.isProcessingComplete = !!i615[109]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i621 = data
  i620.pivot = new pc.Vec2( i621[0], i621[1] )
  i620.anchorMin = new pc.Vec2( i621[2], i621[3] )
  i620.anchorMax = new pc.Vec2( i621[4], i621[5] )
  i620.sizeDelta = new pc.Vec2( i621[6], i621[7] )
  i620.anchoredPosition3D = new pc.Vec3( i621[8], i621[9], i621[10] )
  i620.rotation = new pc.Quat(i621[11], i621[12], i621[13], i621[14])
  i620.scale = new pc.Vec3( i621[15], i621[16], i621[17] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i623 = data
  i622.planeDistance = i623[0]
  i622.referencePixelsPerUnit = i623[1]
  i622.isFallbackOverlay = !!i623[2]
  i622.renderMode = i623[3]
  i622.renderOrder = i623[4]
  i622.sortingLayerName = i623[5]
  i622.sortingOrder = i623[6]
  i622.scaleFactor = i623[7]
  request.r(i623[8], i623[9], 0, i622, 'worldCamera')
  i622.overrideSorting = !!i623[10]
  i622.pixelPerfect = !!i623[11]
  i622.targetDisplay = i623[12]
  i622.overridePixelPerfect = !!i623[13]
  i622.enabled = !!i623[14]
  return i622
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i625 = data
  i624.m_UiScaleMode = i625[0]
  i624.m_ReferencePixelsPerUnit = i625[1]
  i624.m_ScaleFactor = i625[2]
  i624.m_ReferenceResolution = new pc.Vec2( i625[3], i625[4] )
  i624.m_ScreenMatchMode = i625[5]
  i624.m_MatchWidthOrHeight = i625[6]
  i624.m_PhysicalUnit = i625[7]
  i624.m_FallbackScreenDPI = i625[8]
  i624.m_DefaultSpriteDPI = i625[9]
  i624.m_DynamicPixelsPerUnit = i625[10]
  i624.m_PresetInfoIsWorld = !!i625[11]
  return i624
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i627 = data
  i626.m_IgnoreReversedGraphics = !!i627[0]
  i626.m_BlockingObjects = i627[1]
  i626.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i627[2] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i629 = data
  i628.cullTransparentMesh = !!i629[0]
  return i628
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Image' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Sprite')
  i630.m_Type = i631[2]
  i630.m_PreserveAspect = !!i631[3]
  i630.m_FillCenter = !!i631[4]
  i630.m_FillMethod = i631[5]
  i630.m_FillAmount = i631[6]
  i630.m_FillClockwise = !!i631[7]
  i630.m_FillOrigin = i631[8]
  i630.m_UseSpriteMesh = !!i631[9]
  i630.m_PixelsPerUnitMultiplier = i631[10]
  request.r(i631[11], i631[12], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[13]
  i630.m_Color = new pc.Color(i631[14], i631[15], i631[16], i631[17])
  i630.m_RaycastTarget = !!i631[18]
  i630.m_RaycastPadding = new pc.Vec4( i631[19], i631[20], i631[21], i631[22] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i633 = data
  i632.usedByComposite = !!i633[0]
  i632.autoTiling = !!i633[1]
  i632.size = new pc.Vec2( i633[2], i633[3] )
  i632.edgeRadius = i633[4]
  i632.enabled = !!i633[5]
  i632.isTrigger = !!i633[6]
  i632.usedByEffector = !!i633[7]
  i632.density = i633[8]
  i632.offset = new pc.Vec2( i633[9], i633[10] )
  request.r(i633[11], i633[12], 0, i632, 'material')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i635 = data
  i634.bodyType = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'material')
  i634.simulated = !!i635[3]
  i634.useAutoMass = !!i635[4]
  i634.mass = i635[5]
  i634.drag = i635[6]
  i634.angularDrag = i635[7]
  i634.gravityScale = i635[8]
  i634.collisionDetectionMode = i635[9]
  i634.sleepMode = i635[10]
  i634.constraints = i635[11]
  return i634
}

Deserializers["levelonecollision"] = function (request, data, root) {
  var i636 = root || request.c( 'levelonecollision' )
  var i637 = data
  return i636
}

Deserializers["ItemDragM"] = function (request, data, root) {
  var i638 = root || request.c( 'ItemDragM' )
  var i639 = data
  i638.originalScale = new pc.Vec3( i639[0], i639[1], i639[2] )
  i638.originalPosition = new pc.Vec3( i639[3], i639[4], i639[5] )
  i638.isColide = !!i639[6]
  var i641 = i639[7]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 1, i640, '')
  }
  i638.itemsToInteractWith = i640
  request.r(i639[8], i639[9], 0, i638, 'itemToAnimateOnTap')
  i638.isAssembling = !!i639[10]
  i638.assemblingScale = i639[11]
  i638.isAnimate = !!i639[12]
  i638.showIndicator = !!i639[13]
  request.r(i639[14], i639[15], 0, i638, 'ind')
  i638.isTranslate = !!i639[16]
  request.r(i639[17], i639[18], 0, i638, 'particlesOnTap')
  request.r(i639[19], i639[20], 0, i638, 'audioOnInteraction')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'animatorController')
  request.r(i645[2], i645[3], 0, i644, 'avatar')
  i644.updateMode = i645[4]
  i644.hasTransformHierarchy = !!i645[5]
  i644.applyRootMotion = !!i645[6]
  var i647 = i645[7]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.humanBones = i646
  i644.enabled = !!i645[8]
  return i644
}

Deserializers["Itemdrag"] = function (request, data, root) {
  var i650 = root || request.c( 'Itemdrag' )
  var i651 = data
  i650.originalScale = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.originalPosition = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.isColide = !!i651[6]
  var i653 = i651[7]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.itemsToInteractWith = i652
  request.r(i651[8], i651[9], 0, i650, 'itemToAnimateOnTap')
  i650.isAssembling = !!i651[10]
  i650.assemblingScale = i651[11]
  i650.isAnimate = !!i651[12]
  i650.showIndicator = !!i651[13]
  request.r(i651[14], i651[15], 0, i650, 'ind')
  i650.isTranslate = !!i651[16]
  request.r(i651[17], i651[18], 0, i650, 'particlesOnTap')
  request.r(i651[19], i651[20], 0, i650, 'audioOnInteraction')
  return i650
}

Deserializers["GleyPlugins.MainMenu"] = function (request, data, root) {
  var i654 = root || request.c( 'GleyPlugins.MainMenu' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'exitPanel')
  request.r(i655[2], i655[3], 0, i654, 'settingPanel')
  request.r(i655[4], i655[5], 0, i654, 'privecyPanel')
  request.r(i655[6], i655[7], 0, i654, 'musicBtn')
  request.r(i655[8], i655[9], 0, i654, 'soundBtn')
  request.r(i655[10], i655[11], 0, i654, 'spriteOn')
  request.r(i655[12], i655[13], 0, i654, 'spriteOff')
  return i654
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_FirstSelected')
  i656.m_sendNavigationEvents = !!i657[2]
  i656.m_DragThreshold = i657[3]
  return i656
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i659 = data
  i658.m_HorizontalAxis = i659[0]
  i658.m_VerticalAxis = i659[1]
  i658.m_SubmitButton = i659[2]
  i658.m_CancelButton = i659[3]
  i658.m_InputActionsPerSecond = i659[4]
  i658.m_RepeatDelay = i659[5]
  i658.m_ForceModuleActive = !!i659[6]
  i658.m_SendPointerHoverToParent = !!i659[7]
  return i658
}

Deserializers["TimeCountone"] = function (request, data, root) {
  var i660 = root || request.c( 'TimeCountone' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'scoretext')
  i660.timeRemaining = i661[2]
  i660.timerIsRunning = !!i661[3]
  i660.LevelCompleteBool = !!i661[4]
  i660.LevelFail = !!i661[5]
  i660.TimeOver = !!i661[6]
  i660.isadshowing = !!i661[7]
  i660.adscounter = i661[8]
  request.r(i661[9], i661[10], 0, i660, 'AdsText')
  request.r(i661[11], i661[12], 0, i660, 'AdsTextBG')
  i660.showAdsText = !!i661[13]
  i660.DecreaseTime = !!i661[14]
  return i660
}

Deserializers["rewardedvideoscript"] = function (request, data, root) {
  var i662 = root || request.c( 'rewardedvideoscript' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'videoAdButton')
  request.r(i663[2], i663[3], 0, i662, 'NoInternetPopUp')
  request.r(i663[4], i663[5], 0, i662, 'RewardedVideoNotAvailablePopUp')
  request.r(i663[6], i663[7], 0, i662, 'notEnoughCoinsPopup')
  request.r(i663[8], i663[9], 0, i662, 'purchaseConfirmationPopup')
  request.r(i663[10], i663[11], 0, i662, 'videoAdPopUp')
  request.r(i663[12], i663[13], 0, i662, 'purchaseCoinButton')
  request.r(i663[14], i663[15], 0, i662, 'starParticlesUnlocking')
  request.r(i663[16], i663[17], 0, i662, 'badges')
  request.r(i663[18], i663[19], 0, i662, 'beatch')
  request.r(i663[20], i663[21], 0, i662, 'bulb')
  request.r(i663[22], i663[23], 0, i662, 'buttons')
  request.r(i663[24], i663[25], 0, i662, 'camera')
  request.r(i663[26], i663[27], 0, i662, 'candy')
  request.r(i663[28], i663[29], 0, i662, 'cells')
  request.r(i663[30], i663[31], 0, i662, 'chess')
  request.r(i663[32], i663[33], 0, i662, 'combs')
  request.r(i663[34], i663[35], 0, i662, 'glasses')
  request.r(i663[36], i663[37], 0, i662, 'keys')
  request.r(i663[38], i663[39], 0, i662, 'kitchen')
  request.r(i663[40], i663[41], 0, i662, 'kinfe')
  request.r(i663[42], i663[43], 0, i662, 'makeup')
  request.r(i663[44], i663[45], 0, i662, 'stationary')
  request.r(i663[46], i663[47], 0, i662, 'tools')
  request.r(i663[48], i663[49], 0, i662, 'toys')
  request.r(i663[50], i663[51], 0, i662, 'winter')
  request.r(i663[52], i663[53], 0, i662, 'rewardpanl')
  request.r(i663[54], i663[55], 0, i662, 'panelthree')
  request.r(i663[56], i663[57], 0, i662, 'panelfour')
  request.r(i663[58], i663[59], 0, i662, 'panelfive')
  request.r(i663[60], i663[61], 0, i662, 'panelsix')
  request.r(i663[62], i663[63], 0, i662, 'panelseven')
  request.r(i663[64], i663[65], 0, i662, 'paneleight')
  request.r(i663[66], i663[67], 0, i662, 'panelnine')
  request.r(i663[68], i663[69], 0, i662, 'panelten')
  request.r(i663[70], i663[71], 0, i662, 'paneleleven')
  request.r(i663[72], i663[73], 0, i662, 'paneltwelve')
  request.r(i663[74], i663[75], 0, i662, 'paneltharteen')
  request.r(i663[76], i663[77], 0, i662, 'panelfourteen')
  request.r(i663[78], i663[79], 0, i662, 'panelfifteen')
  request.r(i663[80], i663[81], 0, i662, 'panelsixteen')
  request.r(i663[82], i663[83], 0, i662, 'panelseventeen')
  request.r(i663[84], i663[85], 0, i662, 'paneleighteen')
  request.r(i663[86], i663[87], 0, i662, 'panelninteen')
  request.r(i663[88], i663[89], 0, i662, 'paneltwenty')
  i662.levelthreecounter = i663[90]
  i662.levelfourcounter = i663[91]
  i662.levelfivecounter = i663[92]
  i662.levelsixcounter = i663[93]
  i662.levelsevencounter = i663[94]
  i662.leveleightcounter = i663[95]
  i662.levelninecounter = i663[96]
  i662.leveltencounter = i663[97]
  i662.levelelevencounter = i663[98]
  i662.leveltwelvecounter = i663[99]
  i662.leveltharteencounter = i663[100]
  i662.levelfourteencounter = i663[101]
  i662.levelfifteencounter = i663[102]
  i662.levelsixteencounter = i663[103]
  i662.levelseventeencounter = i663[104]
  i662.leveleighteencounter = i663[105]
  i662.levelninteencounter = i663[106]
  i662.leveltwentycounter = i663[107]
  i662.stop = !!i663[108]
  return i662
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i664 = root || request.c( 'AudioManager' )
  var i665 = data
  var i667 = i665[0]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Sound', i667[i + 0]) );
  }
  i664.sounds = i666
  i664.isSoundMute = !!i665[1]
  i664.canVibrate = !!i665[2]
  return i664
}

Deserializers["Sound"] = function (request, data, root) {
  var i670 = root || request.c( 'Sound' )
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'clip')
  i670.volum = i671[3]
  i670.loop = !!i671[4]
  i670.playOnAwake = !!i671[5]
  request.r(i671[6], i671[7], 0, i670, 'source')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i673 = data
  i672.ambientIntensity = i673[0]
  i672.reflectionIntensity = i673[1]
  i672.ambientMode = i673[2]
  i672.ambientLight = new pc.Color(i673[3], i673[4], i673[5], i673[6])
  i672.ambientSkyColor = new pc.Color(i673[7], i673[8], i673[9], i673[10])
  i672.ambientGroundColor = new pc.Color(i673[11], i673[12], i673[13], i673[14])
  i672.ambientEquatorColor = new pc.Color(i673[15], i673[16], i673[17], i673[18])
  i672.fogColor = new pc.Color(i673[19], i673[20], i673[21], i673[22])
  i672.fogEndDistance = i673[23]
  i672.fogStartDistance = i673[24]
  i672.fogDensity = i673[25]
  i672.fog = !!i673[26]
  request.r(i673[27], i673[28], 0, i672, 'skybox')
  i672.fogMode = i673[29]
  var i675 = i673[30]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i675[i + 0]) );
  }
  i672.lightmaps = i674
  i672.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i673[31], i672.lightProbes)
  i672.lightmapsMode = i673[32]
  i672.mixedBakeMode = i673[33]
  i672.environmentLightingMode = i673[34]
  i672.ambientProbe = new pc.SphericalHarmonicsL2(i673[35])
  i672.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i673[36])
  i672.useReferenceAmbientProbe = !!i673[37]
  request.r(i673[38], i673[39], 0, i672, 'customReflection')
  request.r(i673[40], i673[41], 0, i672, 'defaultReflection')
  i672.defaultReflectionMode = i673[42]
  i672.defaultReflectionResolution = i673[43]
  i672.sunLightObjectId = i673[44]
  i672.pixelLightCount = i673[45]
  i672.defaultReflectionHDR = !!i673[46]
  i672.hasLightDataAsset = !!i673[47]
  i672.hasManualGenerate = !!i673[48]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'lightmapColor')
  request.r(i679[2], i679[3], 0, i678, 'lightmapDirection')
  request.r(i679[4], i679[5], 0, i678, 'shadowMask')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i680 = root || new UnityEngine.LightProbes()
  var i681 = data
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i691[i + 0]));
  }
  i688.ShaderCompilationErrors = i690
  i688.name = i689[1]
  i688.guid = i689[2]
  var i693 = i689[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i688.shaderDefinedKeywords = i692
  var i695 = i689[4]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i695[i + 0]) );
  }
  i688.passes = i694
  var i697 = i689[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i697[i + 0]) );
  }
  i688.usePasses = i696
  var i699 = i689[6]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i699[i + 0]) );
  }
  i688.defaultParameterValues = i698
  request.r(i689[7], i689[8], 0, i688, 'unityFallbackShader')
  i688.readDepth = !!i689[9]
  i688.hasDepthOnlyPass = !!i689[10]
  i688.isCreatedByShaderGraph = !!i689[11]
  i688.disableBatching = !!i689[12]
  i688.compiled = !!i689[13]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i703 = data
  i702.shaderName = i703[0]
  i702.errorMessage = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i708 = root || new pc.UnityShaderPass()
  var i709 = data
  i708.id = i709[0]
  i708.subShaderIndex = i709[1]
  i708.name = i709[2]
  i708.passType = i709[3]
  i708.grabPassTextureName = i709[4]
  i708.usePass = !!i709[5]
  i708.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[6], i708.zTest)
  i708.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[7], i708.zWrite)
  i708.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[8], i708.culling)
  i708.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i709[9], i708.blending)
  i708.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i709[10], i708.alphaBlending)
  i708.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[11], i708.colorWriteMask)
  i708.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[12], i708.offsetUnits)
  i708.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[13], i708.offsetFactor)
  i708.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[14], i708.stencilRef)
  i708.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[15], i708.stencilReadMask)
  i708.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[16], i708.stencilWriteMask)
  i708.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[17], i708.stencilOp)
  i708.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[18], i708.stencilOpFront)
  i708.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i709[19], i708.stencilOpBack)
  var i711 = i709[20]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i711[i + 0]) );
  }
  i708.tags = i710
  var i713 = i709[21]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.passDefinedKeywords = i712
  var i715 = i709[22]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i715[i + 0]) );
  }
  i708.passDefinedKeywordGroups = i714
  var i717 = i709[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i717[i + 0]) );
  }
  i708.variants = i716
  var i719 = i709[24]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i719[i + 0]) );
  }
  i708.excludedVariants = i718
  i708.hasDepthReader = !!i709[25]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i721 = data
  i720.val = i721[0]
  i720.name = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i723 = data
  i722.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[0], i722.src)
  i722.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[1], i722.dst)
  i722.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[2], i722.op)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i725 = data
  i724.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[0], i724.pass)
  i724.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[1], i724.fail)
  i724.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[2], i724.zFail)
  i724.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[3], i724.comp)
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i729 = data
  i728.name = i729[0]
  i728.value = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i732.keywords = i734
  i732.hasDiscard = !!i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i739 = data
  i738.passId = i739[0]
  i738.subShaderIndex = i739[1]
  var i741 = i739[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.keywords = i740
  i738.vertexProgram = i739[3]
  i738.fragmentProgram = i739[4]
  i738.exportedForWebGl2 = !!i739[5]
  i738.readDepth = !!i739[6]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'shader')
  i744.pass = i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i749 = data
  i748.name = i749[0]
  i748.type = i749[1]
  i748.value = new pc.Vec4( i749[2], i749[3], i749[4], i749[5] )
  i748.textureValue = i749[6]
  i748.shaderPropertyFlag = i749[7]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'texture')
  i750.aabb = i751[3]
  i750.vertices = i751[4]
  i750.triangles = i751[5]
  i750.textureRect = UnityEngine.Rect.MinMaxRect(i751[6], i751[7], i751[8], i751[9])
  i750.packedRect = UnityEngine.Rect.MinMaxRect(i751[10], i751[11], i751[12], i751[13])
  i750.border = new pc.Vec4( i751[14], i751[15], i751[16], i751[17] )
  i750.transparency = i751[18]
  i750.bounds = i751[19]
  i750.pixelsPerUnit = i751[20]
  i750.textureWidth = i751[21]
  i750.textureHeight = i751[22]
  i750.nativeSize = new pc.Vec2( i751[23], i751[24] )
  i750.pivot = new pc.Vec2( i751[25], i751[26] )
  i750.textureRectOffset = new pc.Vec2( i751[27], i751[28] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i753 = data
  i752.name = i753[0]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i755 = data
  i754.name = i755[0]
  i754.wrapMode = i755[1]
  i754.isLooping = !!i755[2]
  i754.length = i755[3]
  var i757 = i755[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i757[i + 0]) );
  }
  i754.curves = i756
  var i759 = i755[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i759[i + 0]) );
  }
  i754.events = i758
  i754.halfPrecision = !!i755[6]
  i754._frameRate = i755[7]
  i754.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i755[8], i754.localBounds)
  i754.hasMuscleCurves = !!i755[9]
  var i761 = i755[10]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i754.clipMuscleConstant = i760
  i754.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i755[11], i754.clipBindingConstant)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i765 = data
  i764.path = i765[0]
  i764.hash = i765[1]
  i764.componentType = i765[2]
  i764.property = i765[3]
  i764.keys = i765[4]
  var i767 = i765[5]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i767[i + 0]) );
  }
  i764.objectReferenceKeys = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i771 = data
  i770.time = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i775 = data
  i774.functionName = i775[0]
  i774.floatParameter = i775[1]
  i774.intParameter = i775[2]
  i774.stringParameter = i775[3]
  request.r(i775[4], i775[5], 0, i774, 'objectReferenceParameter')
  i774.time = i775[6]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i777 = data
  i776.center = new pc.Vec3( i777[0], i777[1], i777[2] )
  i776.extends = new pc.Vec3( i777[3], i777[4], i777[5] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i780.genericBindings = i782
  var i785 = i781[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.pptrCurveMapping = i784
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i787 = data
  i786.name = i787[0]
  var i789 = i787[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i789[i + 0]) );
  }
  i786.layers = i788
  var i791 = i787[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i791[i + 0]) );
  }
  i786.parameters = i790
  i786.animationClips = i787[3]
  i786.avatarUnsupported = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i795 = data
  i794.name = i795[0]
  i794.defaultWeight = i795[1]
  i794.blendingMode = i795[2]
  i794.avatarMask = i795[3]
  i794.syncedLayerIndex = i795[4]
  i794.syncedLayerAffectsTiming = !!i795[5]
  i794.syncedLayers = i795[6]
  i794.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i795[7], i794.stateMachine)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i797 = data
  i796.id = i797[0]
  i796.name = i797[1]
  i796.path = i797[2]
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i799[i + 0]) );
  }
  i796.states = i798
  var i801 = i797[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i801[i + 0]) );
  }
  i796.machines = i800
  var i803 = i797[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i803[i + 0]) );
  }
  i796.entryStateTransitions = i802
  var i805 = i797[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i805[i + 0]) );
  }
  i796.exitStateTransitions = i804
  var i807 = i797[7]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i807[i + 0]) );
  }
  i796.anyStateTransitions = i806
  i796.defaultStateId = i797[8]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i811 = data
  i810.id = i811[0]
  i810.name = i811[1]
  i810.cycleOffset = i811[2]
  i810.cycleOffsetParameter = i811[3]
  i810.cycleOffsetParameterActive = !!i811[4]
  i810.mirror = !!i811[5]
  i810.mirrorParameter = i811[6]
  i810.mirrorParameterActive = !!i811[7]
  i810.motionId = i811[8]
  i810.nameHash = i811[9]
  i810.fullPathHash = i811[10]
  i810.speed = i811[11]
  i810.speedParameter = i811[12]
  i810.speedParameterActive = !!i811[13]
  i810.tag = i811[14]
  i810.tagHash = i811[15]
  i810.writeDefaultValues = !!i811[16]
  var i813 = i811[17]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.behaviours = i812
  var i815 = i811[18]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i815[i + 0]) );
  }
  i810.transitions = i814
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i821 = data
  i820.fullPath = i821[0]
  i820.canTransitionToSelf = !!i821[1]
  i820.duration = i821[2]
  i820.exitTime = i821[3]
  i820.hasExitTime = !!i821[4]
  i820.hasFixedDuration = !!i821[5]
  i820.interruptionSource = i821[6]
  i820.offset = i821[7]
  i820.orderedInterruption = !!i821[8]
  i820.destinationStateId = i821[9]
  i820.isExit = !!i821[10]
  i820.mute = !!i821[11]
  i820.solo = !!i821[12]
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i823[i + 0]) );
  }
  i820.conditions = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i829 = data
  i828.destinationStateId = i829[0]
  i828.isExit = !!i829[1]
  i828.mute = !!i829[2]
  i828.solo = !!i829[3]
  var i831 = i829[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i831[i + 0]) );
  }
  i828.conditions = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i835 = data
  i834.defaultBool = !!i835[0]
  i834.defaultFloat = i835[1]
  i834.defaultInt = i835[2]
  i834.name = i835[3]
  i834.nameHash = i835[4]
  i834.type = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i837 = data
  i836.name = i837[0]
  i836.bytes64 = i837[1]
  i836.data = i837[2]
  return i836
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i839 = data
  i838.useSafeMode = !!i839[0]
  i838.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i839[1], i838.safeModeOptions)
  i838.timeScale = i839[2]
  i838.useSmoothDeltaTime = !!i839[3]
  i838.maxSmoothUnscaledTime = i839[4]
  i838.rewindCallbackMode = i839[5]
  i838.showUnityEditorReport = !!i839[6]
  i838.logBehaviour = i839[7]
  i838.drawGizmos = !!i839[8]
  i838.defaultRecyclable = !!i839[9]
  i838.defaultAutoPlay = i839[10]
  i838.defaultUpdateType = i839[11]
  i838.defaultTimeScaleIndependent = !!i839[12]
  i838.defaultEaseType = i839[13]
  i838.defaultEaseOvershootOrAmplitude = i839[14]
  i838.defaultEasePeriod = i839[15]
  i838.defaultAutoKill = !!i839[16]
  i838.defaultLoopType = i839[17]
  i838.debugMode = !!i839[18]
  i838.debugStoreTargetId = !!i839[19]
  i838.showPreviewPanel = !!i839[20]
  i838.storeSettingsLocation = i839[21]
  i838.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i839[22], i838.modules)
  i838.createASMDEF = !!i839[23]
  i838.showPlayingTweens = !!i839[24]
  i838.showPausedTweens = !!i839[25]
  return i838
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i841 = data
  i840.logBehaviour = i841[0]
  i840.nestedTweenFailureBehaviour = i841[1]
  return i840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i843 = data
  i842.showPanel = !!i843[0]
  i842.audioEnabled = !!i843[1]
  i842.physicsEnabled = !!i843[2]
  i842.physics2DEnabled = !!i843[3]
  i842.spriteEnabled = !!i843[4]
  i842.uiEnabled = !!i843[5]
  i842.textMeshProEnabled = !!i843[6]
  i842.tk2DEnabled = !!i843[7]
  i842.deAudioEnabled = !!i843[8]
  i842.deUnityExtendedEnabled = !!i843[9]
  i842.epoOutlineEnabled = !!i843[10]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i847[i + 0]) );
  }
  i844.files = i846
  i844.componentToPrefabIds = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i851 = data
  i850.path = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'unityObject')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i855[i + 0]) );
  }
  i852.scriptsExecutionOrder = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i857[i + 0]) );
  }
  i852.sortingLayers = i856
  var i859 = i853[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i859[i + 0]) );
  }
  i852.cullingLayers = i858
  i852.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i853[3], i852.timeSettings)
  i852.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i853[4], i852.physicsSettings)
  i852.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i853[5], i852.physics2DSettings)
  i852.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i853[6], i852.qualitySettings)
  i852.enableRealtimeShadows = !!i853[7]
  i852.enableAutoInstancing = !!i853[8]
  i852.enableStaticBatching = !!i853[9]
  i852.enableDynamicBatching = !!i853[10]
  i852.lightmapEncodingQuality = i853[11]
  i852.desiredColorSpace = i853[12]
  var i861 = i853[13]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i852.allTags = i860
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i865 = data
  i864.name = i865[0]
  i864.value = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  i868.value = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i875 = data
  i874.fixedDeltaTime = i875[0]
  i874.maximumDeltaTime = i875[1]
  i874.timeScale = i875[2]
  i874.maximumParticleTimestep = i875[3]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i877 = data
  i876.gravity = new pc.Vec3( i877[0], i877[1], i877[2] )
  i876.defaultSolverIterations = i877[3]
  i876.bounceThreshold = i877[4]
  i876.autoSyncTransforms = !!i877[5]
  i876.autoSimulation = !!i877[6]
  var i879 = i877[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i879[i + 0]) );
  }
  i876.collisionMatrix = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i883 = data
  i882.enabled = !!i883[0]
  i882.layerId = i883[1]
  i882.otherLayerId = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'material')
  i884.gravity = new pc.Vec2( i885[2], i885[3] )
  i884.positionIterations = i885[4]
  i884.velocityIterations = i885[5]
  i884.velocityThreshold = i885[6]
  i884.maxLinearCorrection = i885[7]
  i884.maxAngularCorrection = i885[8]
  i884.maxTranslationSpeed = i885[9]
  i884.maxRotationSpeed = i885[10]
  i884.baumgarteScale = i885[11]
  i884.baumgarteTOIScale = i885[12]
  i884.timeToSleep = i885[13]
  i884.linearSleepTolerance = i885[14]
  i884.angularSleepTolerance = i885[15]
  i884.defaultContactOffset = i885[16]
  i884.autoSimulation = !!i885[17]
  i884.queriesHitTriggers = !!i885[18]
  i884.queriesStartInColliders = !!i885[19]
  i884.callbacksOnDisable = !!i885[20]
  i884.reuseCollisionCallbacks = !!i885[21]
  i884.autoSyncTransforms = !!i885[22]
  var i887 = i885[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i887[i + 0]) );
  }
  i884.collisionMatrix = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i891 = data
  i890.enabled = !!i891[0]
  i890.layerId = i891[1]
  i890.otherLayerId = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[i + 0]) );
  }
  i892.qualityLevels = i894
  var i897 = i893[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.names = i896
  i892.shadows = i893[2]
  i892.anisotropicFiltering = i893[3]
  i892.antiAliasing = i893[4]
  i892.lodBias = i893[5]
  i892.shadowCascades = i893[6]
  i892.shadowDistance = i893[7]
  i892.shadowmaskMode = i893[8]
  i892.shadowProjection = i893[9]
  i892.shadowResolution = i893[10]
  i892.softParticles = !!i893[11]
  i892.softVegetation = !!i893[12]
  i892.activeColorSpace = i893[13]
  i892.desiredColorSpace = i893[14]
  i892.masterTextureLimit = i893[15]
  i892.maxQueuedFrames = i893[16]
  i892.particleRaycastBudget = i893[17]
  i892.pixelLightCount = i893[18]
  i892.realtimeReflectionProbes = !!i893[19]
  i892.shadowCascade2Split = i893[20]
  i892.shadowCascade4Split = new pc.Vec3( i893[21], i893[22], i893[23] )
  i892.streamingMipmapsActive = !!i893[24]
  i892.vSyncCount = i893[25]
  i892.asyncUploadBufferSize = i893[26]
  i892.asyncUploadTimeSlice = i893[27]
  i892.billboardsFaceCameraPosition = !!i893[28]
  i892.shadowNearPlaneOffset = i893[29]
  i892.streamingMipmapsMemoryBudget = i893[30]
  i892.maximumLODLevel = i893[31]
  i892.streamingMipmapsAddAllCameras = !!i893[32]
  i892.streamingMipmapsMaxLevelReduction = i893[33]
  i892.streamingMipmapsRenderersPerFrame = i893[34]
  i892.resolutionScalingFixedDPIFactor = i893[35]
  i892.streamingMipmapsMaxFileIORequests = i893[36]
  i892.currentQualityLevel = i893[37]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i903 = data
  i902.weight = i903[0]
  i902.vertices = i903[1]
  i902.normals = i903[2]
  i902.tangents = i903[3]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i907 = data
  i906.mode = i907[0]
  i906.parameter = i907[1]
  i906.threshold = i907[2]
  return i906
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[7],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[21],"56":[21],"57":[21],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"65":[21],"66":[21],"67":[21],"68":[7],"69":[70],"71":[72],"73":[72],"13":[12],"74":[20],"75":[1],"76":[1],"77":[78],"79":[78],"26":[80],"23":[80],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"102":[7],"103":[12],"104":[12],"16":[13],"18":[17,12],"105":[12],"15":[13],"106":[12],"107":[12],"108":[12],"109":[12],"110":[12],"111":[12],"112":[12],"113":[12],"114":[12],"115":[17,12],"116":[12],"117":[12],"118":[12],"119":[12],"120":[17,12],"121":[12],"122":[28],"123":[28],"29":[28],"124":[28],"125":[7],"126":[7]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","levelonemanager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","levelonecollision","ItemDragM","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Itemdrag","GleyPlugins.MainMenu","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TimeCountone","rewardedvideoscript","AudioManager","UnityEngine.AudioClip","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MyButton","CFX_AutoStopLoopedEffect","CFX_AutoDestructShuriken","CFX_LightFlicker","UnityEngine.Light","CFX_LightIntensityFade","UnityEngine.Collider2D","UnityStandardAssets.ImageEffects.Antialiasing","UnityStandardAssets.ImageEffects.BloomOptimized","UnityStandardAssets.ImageEffects.BlurOptimized","UnityStandardAssets.ImageEffects.CameraMotionBlur","UnityStandardAssets.ImageEffects.ColorCorrectionCurves","UnityStandardAssets.ImageEffects.ColorCorrectionLookup","UnityStandardAssets.ImageEffects.ColorCorrectionRamp","UnityStandardAssets.ImageEffects.DepthOfFieldDeprecated","UnityStandardAssets.ImageEffects.EdgeDetection","UnityStandardAssets.ImageEffects.Grayscale","UnityStandardAssets.ImageEffects.ImageEffectBase","UnityStandardAssets.ImageEffects.MotionBlur","UnityStandardAssets.ImageEffects.NoiseAndGrain","UnityStandardAssets.ImageEffects.NoiseAndScratches","UnityStandardAssets.ImageEffects.PostEffectsBase","UnityStandardAssets.ImageEffects.ScreenOverlay","UnityStandardAssets.ImageEffects.ScreenSpaceAmbientOcclusion","UnityStandardAssets.ImageEffects.SepiaTone","UnityStandardAssets.ImageEffects.Tonemapping","UnityStandardAssets.ImageEffects.Twirl","UnityStandardAssets.ImageEffects.VignetteAndChromaticAberration","UnityStandardAssets.ImageEffects.Vortex","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "buyfillthe_cut";

Deserializers.lunaInitializationTime = "02/28/2026 19:26:26";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37358";

Deserializers.projectId = "ad1bf1fcb00a3f24f8c22dd9a00f80ac";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1736";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3466";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "Simplecreator";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.Simplecreator.buyfillthe";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "bda6d0ce-2e9c-4d9e-b14b-5c1a7ab42b82";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

