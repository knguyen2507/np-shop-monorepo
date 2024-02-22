## deploy to kubernetes

create namespace

```
kubectl create namespace np-services-k8s
```

apply file yaml

```
kubectl apply -f ./script/kubernetes/secret.yaml
kubectl apply -f ./script/kubernetes/msx-auth.deployment.yaml
kubectl apply -f ./script/kubernetes/msx-shop.deployment.yaml
```

get pods

```
kubectl get pods --namespace=np-services-k8s
```

logs

```
kubectl logs <pods-name> --namespace=np-services-k8s
```

get service

```
kubectl get service --namespace=np-services-k8s
```

expose

```
kubectl expose deployment msx-auth-deployment -n np-services-k8s --type=LoadBalancer --port 80 --target-port 3010
kubectl expose deployment msx-shop-deployment -n np-services-k8s --type=LoadBalancer --port 80 --target-port 3020
```
